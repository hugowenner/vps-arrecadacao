"use client";

import { Target, Users, DollarSign, Clock, ShieldCheck, HeartHandshake, ArrowUpRight, AlertTriangle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface CampaignHeroProps {
  goal: number;
  totalRaised: number;
  remaining: number;
  paidCount: number;
  totalParticipants: number;
  contributionPerPerson: number;
  durationMonths: number;
  percentage: number;
  onOpenPixModal: () => void;
}

export function CampaignHero({
  goal,
  totalRaised,
  remaining,
  paidCount,
  totalParticipants,
  contributionPerPerson,
  durationMonths,
  percentage,
  onOpenPixModal,
}: CampaignHeroProps) {
  return (
    <section className="relative overflow-hidden pt-4 pb-6 sm:pt-10 sm:pb-12">
      {/* Decorative Glow background elements */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-violet-600/10 via-cyan-500/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-3 xs:px-4 sm:px-6">
        {/* Main Titles */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] xs:text-xs font-semibold text-violet-300 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400 shrink-0" />
            <span className="truncate">Infraestrutura do Projeto CS Stats</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Arrecadação <span className="text-gradient">CS Stats</span>
          </h2>

          {/* Tagline com humor ajustado do CS Stats */}
          <p className="text-xs xs:text-sm sm:text-base font-bold text-cyan-300 tracking-wide uppercase font-mono">
            11 jogadores • 1 VPS • 12 meses
          </p>

          {/* Texto principal */}
          <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed px-1">
            Ajude a financiar 12 meses de infraestrutura para manter o CS Stats online, estável e disponível para toda a comunidade.
          </p>

          {/* Frase sutil de humor da contribuição */}
          <div className="pt-1">
            <span className="inline-block rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-[11px] xs:text-xs font-medium text-violet-200 leading-normal">
              11 jogadores. 1 VPS. 12 meses de CS Stats. Agora só falta cada um fazer sua parte. 😎
            </span>
          </div>
        </div>

        {/* Major Crowdfunding Hero Card */}
        <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#121722]/80 backdrop-blur-xl p-4 xs:p-5 sm:p-8 shadow-2xl shadow-violet-950/30 tactical-border">
          {/* Top Bar inside Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-6">
            <div>
              <span className="text-[10px] xs:text-xs font-bold uppercase tracking-wider text-cyan-400">
                Progresso da Arrecadação
              </span>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mt-0.5">
                Financiamento da VPS
              </h3>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="rounded-xl bg-violet-500/10 px-2.5 py-1 text-[11px] xs:text-xs font-semibold text-violet-300 border border-violet-500/20">
                Período: {durationMonths} meses
              </span>
              <span className="rounded-xl bg-cyan-500/10 px-2.5 py-1 text-[11px] xs:text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                11 Cotas
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-5 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4">
            {/* Meta */}
            <div className="rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] p-3 xs:p-4 text-left">
              <div className="flex items-center gap-1.5 text-[11px] xs:text-xs font-semibold text-gray-400">
                <Target className="h-3.5 w-3.5 text-violet-400 shrink-0" />
                <span className="truncate">Meta Total</span>
              </div>
              <div className="mt-1.5 text-base xs:text-lg sm:text-2xl font-extrabold text-white font-mono truncate">
                {formatCurrency(goal)}
              </div>
              <span className="text-[10px] xs:text-[11px] text-gray-400 block truncate">Custo da VPS</span>
            </div>

            {/* Arrecadado */}
            <div className="rounded-xl sm:rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 xs:p-4 text-left">
              <div className="flex items-center gap-1.5 text-[11px] xs:text-xs font-semibold text-emerald-400">
                <DollarSign className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Arrecadado</span>
              </div>
              <div className="mt-1.5 text-base xs:text-lg sm:text-2xl font-extrabold text-emerald-400 font-mono truncate">
                {formatCurrency(totalRaised)}
              </div>
              <span className="text-[10px] xs:text-[11px] text-emerald-300/70 block truncate">
                {paidCount} de {totalParticipants} pagos
              </span>
            </div>

            {/* Faltam */}
            <div className="rounded-xl sm:rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3 xs:p-4 text-left">
              <div className="flex items-center gap-1.5 text-[11px] xs:text-xs font-semibold text-amber-400">
                <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span className="truncate">Faltam</span>
              </div>
              <div className="mt-1.5 text-base xs:text-lg sm:text-2xl font-extrabold text-amber-400 font-mono truncate">
                {formatCurrency(remaining)}
              </div>
              <span className="text-[10px] xs:text-[11px] text-amber-300/70 block truncate">Para a meta</span>
            </div>

            {/* Participantes */}
            <div className="rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3 xs:p-4 text-left">
              <div className="flex items-center gap-1.5 text-[11px] xs:text-xs font-semibold text-cyan-400">
                <Users className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">Participantes</span>
              </div>
              <div className="mt-1.5 text-base xs:text-lg sm:text-2xl font-extrabold text-cyan-300 font-mono truncate">
                {paidCount} / {totalParticipants}
              </div>
              <span className="text-[10px] xs:text-[11px] text-cyan-300/70 block truncate">
                {formatCurrency(contributionPerPerson)} / cota
              </span>
            </div>
          </div>

          {/* Progress Bar Section */}
          <div className="mt-6 sm:mt-8 space-y-2.5">
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-xs sm:text-sm font-semibold">
              <span className="text-gray-300 text-[11px] xs:text-xs sm:text-sm">
                {formatCurrency(totalRaised)} <span className="text-gray-400 font-normal">de {formatCurrency(goal)}</span>
              </span>
              <span className="text-cyan-400 font-bold font-mono text-sm sm:text-base">
                {percentage.toFixed(1)}%
              </span>
            </div>

            {/* Visual Bar */}
            <div className="relative h-3.5 sm:h-4 w-full overflow-hidden rounded-full bg-black/60 p-0.5 border border-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-400 transition-all duration-700 ease-out shadow-lg shadow-cyan-500/30"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Aviso claro de contratação condicionada a 100% da meta */}
          <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5 sm:p-4 text-amber-200">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <h4 className="font-bold text-amber-300 leading-snug">
                  ⚠️ A VPS será contratada somente após a meta ser 100% arrecadada.
                </h4>
                <p className="text-amber-200/90 leading-relaxed text-[11px] sm:text-xs">
                  O valor arrecadado será utilizado para contratar a infraestrutura do CS Stats por 12 meses. A contratação somente será realizada quando as 11 cotas forem confirmadas e o valor necessário para a VPS estiver totalmente arrecadado.
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-amber-300 pt-0.5">
                  Se a meta não for atingida, a VPS não será contratada.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Footer Row */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5 sm:pt-6">
            <div className="text-xs text-gray-400 text-center sm:text-left space-y-0.5 w-full sm:w-auto">
              <p className="font-semibold text-gray-300">
                Cota individual fixa: <span className="text-emerald-400 font-bold">{formatCurrency(contributionPerPerson)}</span>
              </p>
              <p className="text-[11px] text-violet-300/90 italic">
                Pagamento único via PIX para manter as APIs e dados do CS Stats ativos.
              </p>
            </div>

            <button
              onClick={onOpenPixModal}
              className="w-full sm:w-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 px-6 py-3 text-xs xs:text-sm font-bold text-white shadow-xl shadow-violet-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <HeartHandshake className="h-4 w-4 xs:h-5 xs:w-5 text-cyan-200 shrink-0" />
              <span>CONTRIBUIR — {formatCurrency(contributionPerPerson)}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
