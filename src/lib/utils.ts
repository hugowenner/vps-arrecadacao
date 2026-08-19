import { CampaignData } from "@/types/campaign";

/**
 * Formata valores numéricos para a moeda Real Brasileiro (BRL)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * Calcula todas as métricas derivadas da campanha de forma estrita e segura
 */
export function calculateCampaignMetrics(campaign: CampaignData) {
  const totalParticipants = campaign.participants.length;
  const paidParticipantsCount = campaign.participants.filter((p) => p.paid).length;
  
  // Total arrecadado somando os pagamentos reais dos participantes pagos
  const totalRaised = paidParticipantsCount * campaign.contributionPerPerson;
  
  // Total que seria arrecadado se todos pagarem
  const maxPossibleRaised = totalParticipants * campaign.contributionPerPerson;
  
  // Valor faltante para atingir a meta da VPS
  const remaining = Math.max(0, campaign.goal - totalRaised);
  
  // Porcentagem calculada em relação à meta da VPS, limitada a no máximo 100%
  const rawPercentage = (totalRaised / campaign.goal) * 100;
  const percentage = Math.min(100, Math.round(rawPercentage * 10) / 10);

  // Saldo estimado restante após contratação (396.00 - 395.88 = 0.12 quando 100% pagos)
  const estimatedSurplus = Math.max(0, maxPossibleRaised - campaign.goal);

  // Determinar status dinâmico ou configurado
  let currentStatus = campaign.status;
  if (totalRaised >= campaign.goal && campaign.status === "in_progress") {
    currentStatus = "goal_reached";
  }

  return {
    totalParticipants,
    paidParticipantsCount,
    pendingParticipantsCount: totalParticipants - paidParticipantsCount,
    totalRaised,
    maxPossibleRaised,
    remaining,
    percentage,
    estimatedSurplus,
    currentStatus,
  };
}

/**
 * Gera uma cor de destaque pseudo-aleatória consistente baseada no nome do jogador para o avatar CS2
 */
export function getAvatarColors(name: string) {
  const colors = [
    { bg: "bg-amber-500/10 text-amber-400 border-amber-500/30", ring: "ring-amber-500/20" },
    { bg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30", ring: "ring-cyan-500/20" },
    { bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", ring: "ring-emerald-500/20" },
    { bg: "bg-violet-500/10 text-violet-400 border-violet-500/30", ring: "ring-violet-500/20" },
    { bg: "bg-rose-500/10 text-rose-400 border-rose-500/30", ring: "ring-rose-500/20" },
    { bg: "bg-blue-500/10 text-blue-400 border-blue-500/30", ring: "ring-blue-500/20" },
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
