"use client";

import { CampaignStatusType } from "@/types/campaign";
import { Clock, CheckCircle2, Server, Activity } from "lucide-react";

interface CampaignStatusCardProps {
  status: CampaignStatusType;
  paidCount: number;
  totalParticipants: number;
}

export function CampaignStatusCard({ status, paidCount, totalParticipants }: CampaignStatusCardProps) {
  const getStatusDetails = () => {
    switch (status) {
      case "goal_reached":
        return {
          title: "Meta Atingida",
          badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          icon: <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 shrink-0" />,
          description: "🎉 META ATINGIDA! A comunidade fez sua parte. Agora ninguém pode culpar o servidor pelo 0/12.",
          step: 2,
        };
      case "vps_contracted":
        return {
          title: "VPS Contratada & Ativa",
          badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
          icon: <Server className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 shrink-0" />,
          description: "A VPS para 12 meses foi contratada e configurada com sucesso. Servidor 100% operacional!",
          step: 3,
        };
      case "in_progress":
      default:
        return {
          title: "Em Arrecadação",
          badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
          icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 animate-pulse shrink-0" />,
          description: `Campanha ativa no momento. Foram confirmadas ${paidCount} de ${totalParticipants} cotas individuais via PIX.`,
          step: 1,
        };
    }
  };

  const details = getStatusDetails();

  return (
    <section id="servidor" className="py-4 sm:py-8">
      <div className="mx-auto max-w-6xl px-3 xs:px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#121622]/90 p-4 xs:p-5 sm:p-8 backdrop-blur-xl shadow-xl">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-5">
            <div className="flex items-center gap-2.5 xs:gap-3">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/30">
                <Activity className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Status da Campanha</h3>
                <p className="text-[11px] xs:text-xs text-gray-400">Etapa atual do financiamento da VPS</p>
              </div>
            </div>

            {/* Main Status Badge */}
            <div className={`inline-flex items-center gap-1.5 xs:gap-2 rounded-xl border px-3 py-1.5 xs:px-4 xs:py-2 text-xs sm:text-sm font-extrabold self-start sm:self-auto ${details.badgeBg}`}>
              {details.icon}
              <span>{details.title}</span>
            </div>
          </div>

          <p className="mt-4 sm:mt-5 text-xs xs:text-sm text-gray-300 leading-relaxed font-medium">
            {details.description}
          </p>

          {/* Timeline Steps — Responsive vertical stacking on mobile */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Step 1 */}
            <div
              className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-4 transition-all ${
                details.step === 1
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                  : details.step > 1
                  ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-300"
                  : "border-white/5 bg-black/40 text-gray-500"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] xs:text-xs font-bold uppercase tracking-wider">Etapa 1</span>
                {details.step > 1 ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Clock className="h-4 w-4 text-amber-400" />
                )}
              </div>
              <h4 className="mt-1.5 text-xs xs:text-sm font-bold text-white">1. Em Arrecadação</h4>
              <p className="mt-0.5 text-[11px] text-gray-400">Pagamento manual das 11 cotas via PIX</p>
            </div>

            {/* Step 2 */}
            <div
              className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-4 transition-all ${
                details.step === 2
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                  : details.step > 2
                  ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-300"
                  : "border-white/5 bg-black/40 text-gray-500"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] xs:text-xs font-bold uppercase tracking-wider">Etapa 2</span>
                {details.step >= 2 ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-gray-600" />
                )}
              </div>
              <h4 className="mt-1.5 text-xs xs:text-sm font-bold text-white">2. Meta Atingida</h4>
              <p className="mt-0.5 text-[11px] text-gray-400">Total de R$ 395,88 arrecadado</p>
            </div>

            {/* Step 3 */}
            <div
              className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-4 transition-all ${
                details.step === 3
                  ? "border-blue-500/40 bg-blue-500/10 text-blue-200"
                  : "border-white/5 bg-black/40 text-gray-500"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] xs:text-xs font-bold uppercase tracking-wider">Etapa 3</span>
                {details.step === 3 ? (
                  <Server className="h-4 w-4 text-blue-400" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-gray-600" />
                )}
              </div>
              <h4 className="mt-1.5 text-xs xs:text-sm font-bold text-white">3. VPS Contratada</h4>
              <p className="mt-0.5 text-[11px] text-gray-400">Servidor ativo por 12 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
