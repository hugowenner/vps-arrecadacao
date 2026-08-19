"use client";

import { useState } from "react";
import { campaignData } from "@/data/campaign";
import { calculateCampaignMetrics } from "@/lib/utils";
import { Header } from "@/components/Header";
import { CampaignHero } from "@/components/CampaignHero";
import { ParticipantList } from "@/components/ParticipantList";
import { TransparencyCard } from "@/components/TransparencyCard";
import { CampaignStatusCard } from "@/components/CampaignStatusCard";
import { Footer } from "@/components/Footer";
import { PixModal } from "@/components/PixModal";

export default function HomePage() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);

  // Calcula todas as métricas derivadas da campanha dinamicamente a partir dos dados do campaign.ts
  const metrics = calculateCampaignMetrics(campaignData);

  return (
    <div className="min-h-screen bg-[#0e1117] text-gray-100 selection:bg-violet-500/30 selection:text-violet-200">
      {/* Top Header Navigation */}
      <Header onOpenPixModal={() => setIsPixModalOpen(true)} />

      <main className="space-y-4">
        {/* Main Hero Crowdfunding Banner */}
        <CampaignHero
          goal={campaignData.goal}
          totalRaised={metrics.totalRaised}
          remaining={metrics.remaining}
          paidCount={metrics.paidParticipantsCount}
          totalParticipants={metrics.totalParticipants}
          contributionPerPerson={campaignData.contributionPerPerson}
          durationMonths={campaignData.durationMonths}
          percentage={metrics.percentage}
          onOpenPixModal={() => setIsPixModalOpen(true)}
        />

        {/* List of 11 Participants */}
        <ParticipantList
          participants={campaignData.participants}
          contributionAmount={campaignData.contributionPerPerson}
        />

        {/* Current Campaign Status Card */}
        <CampaignStatusCard
          status={metrics.currentStatus}
          paidCount={metrics.paidParticipantsCount}
          totalParticipants={metrics.totalParticipants}
        />

        {/* Transparency Breakdown Card */}
        <TransparencyCard
          goal={campaignData.goal}
          contributionPerPerson={campaignData.contributionPerPerson}
          totalParticipants={metrics.totalParticipants}
          maxPossibleRaised={metrics.maxPossibleRaised}
          estimatedSurplus={metrics.estimatedSurplus}
          durationMonths={campaignData.durationMonths}
        />
      </main>

      {/* Footer */}
      <Footer onOpenPixModal={() => setIsPixModalOpen(true)} />

      {/* PIX Payment Modal */}
      <PixModal
        isOpen={isPixModalOpen}
        onClose={() => setIsPixModalOpen(false)}
        pixKey={campaignData.pixKey}
        pixKeyType={campaignData.pixKeyType}
        contributionAmount={campaignData.contributionPerPerson}
        adminContactLink={campaignData.adminContactLink}
        adminContactLabel={campaignData.adminContactLabel}
      />
    </div>
  );
}
