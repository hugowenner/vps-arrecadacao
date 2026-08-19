export interface Participant {
  id: string;
  name: string;
  paid: boolean;
  steamId?: string;
  avatarUrl?: string;
}

export type CampaignStatusType = "in_progress" | "goal_reached" | "vps_contracted";

export interface CampaignData {
  title: string;
  subtitle: string;
  goal: number;
  contributionPerPerson: number;
  durationMonths: number;
  status: CampaignStatusType;
  statusLabel?: string;
  pixKey: string;
  pixKeyType: string;
  adminContactLink: string;
  adminContactLabel: string;
  participants: Participant[];
}
