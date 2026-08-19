"use client";

import { useState } from "react";
import { Participant } from "@/types/campaign";
import { formatCurrency, getAvatarColors } from "@/lib/utils";
import { CheckCircle2, Clock } from "lucide-react";

interface ParticipantCardProps {
  participant: Participant;
  contributionAmount: number;
  steamAvatarUrl?: string;
}

export function ParticipantCard({
  participant,
  contributionAmount,
  steamAvatarUrl,
}: ParticipantCardProps) {
  const [imageError, setImageError] = useState(false);
  const avatarColors = getAvatarColors(participant.name);

  // Extrair iniciais do jogador (máx 2 caracteres) para fallback
  const initials = participant.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const showSteamAvatar = !!steamAvatarUrl && !imageError;

  return (
    <div
      className={`group relative flex items-center justify-between rounded-2xl border p-4 transition-all duration-200 ${
        participant.paid
          ? "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50 shadow-lg shadow-emerald-950/20"
          : "border-white/10 bg-[#141924]/80 hover:border-white/20 hover:bg-[#181f2e]"
      }`}
    >
      {/* Participant Info */}
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Avatar Container (Steam Image vs Initials Fallback) */}
        {showSteamAvatar ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/20 bg-black/40 shadow-inner">
            {/* Standard img with onError fallback */}
            <img
              src={steamAvatarUrl}
              alt={`Avatar de ${participant.name}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-black border ${avatarColors.bg}`}
          >
            {initials}
          </div>
        )}

        {/* Name & Value */}
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-white truncate group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
            <span>{participant.name}</span>
          </h4>
          <span className="text-xs font-medium text-gray-400">
            Cota: <strong className="text-gray-200 font-semibold">{formatCurrency(contributionAmount)}</strong>
          </span>
        </div>
      </div>

      {/* Status Badge */}
      <div className="shrink-0 pl-2">
        {participant.paid ? (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 shadow-sm shadow-emerald-950/40">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Pago</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400">
            <Clock className="h-3.5 w-3.5 text-amber-400" />
            <span>Aguardando</span>
          </div>
        )}
      </div>
    </div>
  );
}
