import { NextRequest, NextResponse } from "next/server";

const STEAM_API_BASE = "https://api.steampowered.com";

interface SteamSummary {
  steamid: string;
  personaname: string;
  avatarfull: string;
}

function isSteamId64(value: string): boolean {
  return /^\d{17}$/.test(value);
}

async function resolveVanityUrl(vanity: string, apiKey: string): Promise<string | null> {
  try {
    const url = `${STEAM_API_BASE}/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${encodeURIComponent(vanity)}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.response?.success === 1 ? data.response.steamid ?? null : null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const apiKey = process.env.STEAM_API_KEY;

  if (!apiKey) {
    // Se a chave não estiver configurada no servidor, responde com mapa vazio sem erro 500
    return NextResponse.json({ avatars: {} }, { status: 200 });
  }

  const { searchParams } = req.nextUrl;
  const rawSteamIds = searchParams.get("steamIds") || searchParams.get("steamId");

  if (!rawSteamIds) {
    return NextResponse.json({ avatars: {} }, { status: 200 });
  }

  const inputIds = rawSteamIds.split(",").map((s) => s.trim()).filter(Boolean);
  if (inputIds.length === 0) {
    return NextResponse.json({ avatars: {} }, { status: 200 });
  }

  try {
    const valid64s: string[] = [];
    const vanityMap = new Map<string, string>(); // vanity -> resolved 64

    for (const id of inputIds) {
      if (isSteamId64(id)) {
        valid64s.push(id);
      } else {
        const resolved = await resolveVanityUrl(id, apiKey);
        if (resolved) {
          valid64s.push(resolved);
          vanityMap.set(id, resolved);
        }
      }
    }

    if (valid64s.length === 0) {
      return NextResponse.json({ avatars: {} }, { status: 200 });
    }

    // Steam API GetPlayerSummaries
    const url = `${STEAM_API_BASE}/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${valid64s.join(",")}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });

    if (!res.ok) {
      return NextResponse.json({ avatars: {} }, { status: 200 });
    }

    const data = await res.json();
    const players: SteamSummary[] = data?.response?.players ?? [];

    const avatars: Record<string, { avatarUrl: string; personaName: string }> = {};

    for (const player of players) {
      avatars[player.steamid] = {
        avatarUrl: player.avatarfull,
        personaName: player.personaname,
      };
    }

    // Mapear também para vanity URLs originais se houver
    for (const [vanity, id64] of vanityMap.entries()) {
      if (avatars[id64]) {
        avatars[vanity] = avatars[id64];
      }
    }

    return NextResponse.json(
      { avatars },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        },
      }
    );
  } catch (err) {
    console.error("[steam-avatar-api] Erro ao consultar a Steam Web API:", err instanceof Error ? err.message : err);
    // Retorno gracioso com mapa vazio para não quebrar a interface
    return NextResponse.json({ avatars: {} }, { status: 200 });
  }
}
