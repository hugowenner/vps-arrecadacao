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
    <section id="transparencia" className="py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-[#121622]/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Transparência da Arrecadação</h3>
              {/* Humor em Transparência */}
              <p className="text-xs text-violet-300/90 italic font-medium mt-0.5">
                "Sem mágica, sem caixa-preta e sem 'confia'. Aqui está para onde vai o dinheiro."
              </p>
            </div>
          </div>

          {/* Grid Table Breakdown */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-black/40 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Objetivo</span>
              <p className="mt-1 text-sm font-semibold text-white">Financiar VPS do projeto CS Stats por {durationMonths} meses</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Valor da VPS (12 meses)</span>
              <p className="mt-1 text-base font-extrabold text-violet-400">{formatCurrency(goal)}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Total de Cotas</span>
              <p className="mt-1 text-base font-extrabold text-cyan-400">{totalParticipants} cotistas</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Valor da Cota por Pessoa</span>
              <p className="mt-1 text-base font-extrabold text-emerald-400">{formatCurrency(contributionPerPerson)}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Total Arrecadável ({totalParticipants} × R$ 36)</span>
              <p className="mt-1 text-base font-extrabold text-white">{formatCurrency(maxPossibleRaised)}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Saldo Estimado Pós-Contratação</span>
              <p className="mt-1 text-base font-extrabold text-amber-400">{formatCurrency(estimatedSurplus)}</p>
            </div>
          </div>

          {/* Notice Card: Contratação sob 100% de arrecadação */}
          <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm">
                <h4 className="font-bold text-amber-300">
                  ⚠️ A VPS será contratada somente após a meta ser 100% arrecadada.
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

          {/* Guarantee Footer Notice */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-xs text-cyan-200">
            <Info className="h-5 w-5 text-cyan-400 shrink-0" />
            <p className="leading-relaxed">
              <strong>Garantia da Comunidade:</strong> 100% dos recursos arrecadados serão utilizados exclusivamente para custear a hospedagem e manutenção da infraestrutura do CS Stats. O saldo residual de {formatCurrency(estimatedSurplus)} permanecerá reservado no fundo para eventuais custos operacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
