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
    <section className="relative overflow-hidden pt-6 pb-8 sm:pt-10 sm:pb-12">
      {/* Decorative Glow background elements */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-violet-600/10 via-cyan-500/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Titles */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300 backdrop-blur-md">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>Infraestrutura do Projeto CS Stats</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Arrecadação <span className="text-gradient">CS Stats</span>
          </h2>

          {/* Tagline com humor ajustado do CS Stats */}
          <p className="text-sm sm:text-base font-bold text-cyan-300 tracking-wide uppercase font-mono">
            11 jogadores • 1 VPS • 12 meses de CS Stats
          </p>

          {/* Texto principal */}
          <p className="text-sm text-gray-300 sm:text-base leading-relaxed">
            Ajude a financiar 12 meses de infraestrutura para manter o CS Stats online, estável e disponível para toda a comunidade.
          </p>

          {/* Frase sutil de humor da contribuição */}
          <div className="pt-1">
            <span className="inline-block rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-200">
              11 jogadores. 1 VPS. 12 meses de CS Stats. Agora só falta cada um fazer sua parte. 😎
            </span>
          </div>
        </div>

        {/* Major Crowdfunding Hero Card */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#121722]/80 backdrop-blur-xl p-5 sm:p-8 shadow-2xl shadow-violet-950/30 tactical-border">
          {/* Top Bar inside Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Progresso da Arrecadação
              </span>
              <h3 className="text-xl font-bold text-white sm:text-2xl mt-0.5">
                Financiamento da VPS — CS Stats
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300 border border-violet-500/20">
                Período: {durationMonths} meses
              </span>
              <span className="rounded-xl bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                11 Cotas
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {/* Meta */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                <Target className="h-4 w-4 text-violet-400" />
                <span>Meta Total</span>
              </div>
              <div className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                {formatCurrency(goal)}
              </div>
              <span className="text-[11px] text-gray-400">Custo da VPS</span>
            </div>

            {/* Arrecadado */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <DollarSign className="h-4 w-4 text-emerald-400" />
                <span>Arrecadado</span>
              </div>
              <div className="mt-2 text-xl font-extrabold text-emerald-400 sm:text-2xl">
                {formatCurrency(totalRaised)}
              </div>
              <span className="text-[11px] text-emerald-300/70">
                {paidCount} de {totalParticipants} pagos
              </span>
            </div>

            {/* Faltam */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <Clock className="h-4 w-4 text-amber-400" />
                <span>Faltam</span>
              </div>
              <div className="mt-2 text-xl font-extrabold text-amber-400 sm:text-2xl">
                {formatCurrency(remaining)}
              </div>
              <span className="text-[11px] text-amber-300/70">Para atingir a meta</span>
            </div>

            {/* Participantes */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
                <Users className="h-4 w-4 text-cyan-400" />
                <span>Participantes</span>
              </div>
              <div className="mt-2 text-xl font-extrabold text-cyan-300 sm:text-2xl">
                {paidCount} / {totalParticipants}
              </div>
              <span className="text-[11px] text-cyan-300/70">
                {formatCurrency(contributionPerPerson)} / cota
              </span>
            </div>
          </div>

          {/* Progress Bar Section */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span className="text-gray-300">
                {formatCurrency(totalRaised)} <span className="text-gray-400 font-normal">de {formatCurrency(goal)}</span>
              </span>
              <span className="text-cyan-400 font-bold font-mono text-base">
                {percentage.toFixed(1)}%
              </span>
            </div>

            {/* Visual Bar */}
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-black/60 p-0.5 border border-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-400 transition-all duration-700 ease-out shadow-lg shadow-cyan-500/30"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Aviso claro de contratação condicionada a 100% da meta */}
          <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm">
                <h4 className="font-bold text-amber-300 flex items-center gap-1">
                  <span>⚠️ A VPS será contratada somente após a meta ser 100% arrecadada.</span>
                </h4>
                <p className="text-amber-200/90 leading-relaxed text-xs">
                  O valor arrecadado será utilizado para contratar a infraestrutura do CS Stats por 12 meses. A contratação somente será realizada quando as 11 cotas forem confirmadas e o valor necessário para a VPS estiver totalmente arrecadado.
                </p>
                <p className="text-xs font-semibold text-amber-300 pt-0.5">
                  Se a meta não for atingida, a VPS não será contratada.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Footer Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="text-xs text-gray-400 text-center sm:text-left space-y-0.5">
              <p className="font-semibold text-gray-300">
                Cota individual fixa: <span className="text-emerald-400 font-bold">{formatCurrency(contributionPerPerson)}</span> por participante.
              </p>
              <p className="text-[11px] text-violet-300/90 italic">
                Pagamento único via PIX para manter as APIs e dados do CS Stats ativos.
              </p>
            </div>

            <button
              onClick={onOpenPixModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-violet-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <HeartHandshake className="h-5 w-5 text-cyan-200" />
              <span>CONTRIBUIR — {formatCurrency(contributionPerPerson)}</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
