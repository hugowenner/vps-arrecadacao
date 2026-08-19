"use client";

import { ShieldCheck, Info, AlertTriangle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface TransparencyCardProps {
  goal: number;
  contributionPerPerson: number;
  totalParticipants: number;
  maxPossibleRaised: number;
  estimatedSurplus: number;
  durationMonths: number;
}

export function TransparencyCard({
  goal,
  contributionPerPerson,
  totalParticipants,
  maxPossibleRaised,
  estimatedSurplus,
  durationMonths,
}: TransparencyCardProps) {
  return (
    <section id="transparencia" className="py-4 sm:py-8">
      <div className="mx-auto max-w-6xl px-3 xs:px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#121622]/90 p-4 xs:p-5 sm:p-8 backdrop-blur-xl shadow-xl">
          {/* Header */}
          <div className="flex items-center gap-2.5 xs:gap-3 border-b border-white/10 pb-4 sm:pb-5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Transparência da Arrecadação</h3>
              {/* Humor em Transparência */}
              <p className="text-[11px] xs:text-xs text-violet-300/90 italic font-medium mt-0.5">
                "Sem mágica, sem caixa-preta e sem 'confia'. Aqui está para onde vai o dinheiro."
              </p>
            </div>
          </div>

          {/* Grid Table Breakdown — Responsive stacked cards for mobile */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4">
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Objetivo</span>
              <p className="mt-1 text-xs xs:text-sm font-semibold text-white">Financiar VPS do projeto CS Stats por {durationMonths} meses</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4">
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Valor da VPS (12 meses)</span>
              <p className="mt-1 text-sm xs:text-base font-extrabold text-violet-400 font-mono">{formatCurrency(goal)}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4">
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Total de Cotas</span>
              <p className="mt-1 text-sm xs:text-base font-extrabold text-cyan-400 font-mono">{totalParticipants} cotistas</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4">
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Valor da Cota por Pessoa</span>
              <p className="mt-1 text-sm xs:text-base font-extrabold text-emerald-400 font-mono">{formatCurrency(contributionPerPerson)}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4">
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Total Arrecadável ({totalParticipants} × R$ 36)</span>
              <p className="mt-1 text-sm xs:text-base font-extrabold text-white font-mono">{formatCurrency(maxPossibleRaised)}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4">
              <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Saldo Estimado Pós-Contratação</span>
              <p className="mt-1 text-sm xs:text-base font-extrabold text-amber-400 font-mono">{formatCurrency(estimatedSurplus)}</p>
            </div>
          </div>

          {/* Notice Card: Contratação sob 100% de arrecadação */}
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

          {/* Guarantee Footer Notice */}
          <div className="mt-3.5 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3.5 sm:p-4 text-[11px] sm:text-xs text-cyan-200">
            <Info className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong>Garantia da Comunidade:</strong> 100% dos recursos arrecadados serão utilizados exclusivamente para custear a hospedagem e manutenção da infraestrutura do CS Stats. O saldo residual de {formatCurrency(estimatedSurplus)} permanecerá reservado no fundo para eventuais custos operacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
