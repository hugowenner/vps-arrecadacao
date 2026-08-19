"use client";

import { useState, useEffect } from "react";
import { Participant } from "@/types/campaign";
import { ParticipantCard } from "./ParticipantCard";
import { Users, Filter } from "lucide-react";

interface ParticipantListProps {
  participants: Participant[];
  contributionAmount: number;
}

type FilterTab = "all" | "paid" | "pending";

export function ParticipantList({ participants, contributionAmount }: ParticipantListProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [steamAvatars, setSteamAvatars] = useState<Record<string, string>>({});

  // Efeito de busca em lote para avatares da Steam
  useEffect(() => {
    const steamIdsToFetch = participants
      .map((p) => p.steamId)
      .filter((id): id is string => !!id && id.trim().length > 0);

    if (steamIdsToFetch.length === 0) return;

    const controller = new AbortController();

    async function fetchAvatars() {
      try {
        const query = encodeURIComponent(steamIdsToFetch.join(","));
        const res = await fetch(`/api/steam-avatar?steamIds=${query}`, {
          signal: controller.signal,
        });

        if (res.ok) {
          const data = await res.json();
          const avatarMap: Record<string, string> = {};

          if (data?.avatars) {
            for (const [id, details] of Object.entries(data.avatars)) {
              if (typeof details === "object" && details !== null && "avatarUrl" in details) {
                avatarMap[id] = (details as { avatarUrl: string }).avatarUrl;
              }
            }
          }

          setSteamAvatars(avatarMap);
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.warn("[ParticipantList] Não foi possível carregar avatares da Steam:", err);
        }
      }
    }

    fetchAvatars();

    return () => controller.abort();
  }, [participants]);

  const paidCount = participants.filter((p) => p.paid).length;
  const pendingCount = participants.length - paidCount;

  const filteredParticipants = participants.filter((p) => {
    if (activeTab === "paid") return p.paid;
    if (activeTab === "pending") return !p.paid;
    return true;
  });

  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Participantes ({participants.length})
                </h3>
              </div>
              {/* Frase sutil de humor da comunidade */}
              <p className="text-xs text-violet-300/90 italic font-medium mt-0.5">
                "Agora é só cada um fazer a sua parte. Sim, isso inclui você."
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-black/40 p-1 text-xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
                activeTab === "all"
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Todos ({participants.length})
            </button>
            <button
              onClick={() => setActiveTab("paid")}
              className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
                activeTab === "paid"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Pagos ({paidCount})
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
                activeTab === "pending"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Aguardando ({pendingCount})
            </button>
          </div>
        </div>

        {/* Participant Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredParticipants.map((participant) => (
            <ParticipantCard
              key={participant.id}
              participant={participant}
              contributionAmount={contributionAmount}
              steamAvatarUrl={participant.steamId ? steamAvatars[participant.steamId] : undefined}
            />
          ))}
        </div>

        {filteredParticipants.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-8 text-center text-gray-400">
            <Filter className="mx-auto h-8 w-8 text-gray-500 mb-2" />
            <p className="text-sm font-semibold">Nenhum participante encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
