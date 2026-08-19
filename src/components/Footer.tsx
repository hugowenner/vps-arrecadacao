"use client";

import { Server, HeartHandshake, ShieldCheck, Activity } from "lucide-react";

interface FooterProps {
  onOpenPixModal?: () => void;
}

export function Footer({ onOpenPixModal }: FooterProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-12 sm:mt-16 border-t border-white/10 bg-[#0a0d13] pt-8 sm:pt-10 pb-8 text-xs text-gray-400">
      <div className="mx-auto max-w-6xl px-3 xs:px-4 sm:px-6 space-y-6 sm:space-y-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-5 pb-6 sm:pb-8 border-b border-white/10 text-center md:text-left">
          {/* Identity & Subtitle */}
          <div className="space-y-1.5 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/20 text-cyan-400 border border-violet-500/30 shrink-0">
                <Server className="h-4 w-4" />
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-white text-sm xs:text-base">CS2 COMMUNITY FUND</h3>
                <p className="text-[11px] text-violet-300 font-mono">11 jogadores • 1 VPS • 12 meses</p>
              </div>
            </div>
            <p className="text-[11px] xs:text-xs text-gray-400 italic">"Feito pela comunidade, para a comunidade."</p>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>🟢 Campanha em andamento</span>
          </div>

          {/* Links & Actions with 44px touch targets */}
          <div className="flex items-center gap-3 text-xs font-semibold flex-wrap justify-center">
            <button
              onClick={() => scrollToSection("servidor")}
              className="min-h-[40px] px-2.5 text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Activity className="h-3.5 w-3.5 text-violet-400 shrink-0" />
              <span>Servidor</span>
            </button>
            <button
              onClick={() => scrollToSection("transparencia")}
              className="min-h-[40px] px-2.5 text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span>Transparência</span>
            </button>
            {onOpenPixModal && (
              <button
                onClick={onOpenPixModal}
                className="min-h-[44px] rounded-xl bg-violet-600/30 hover:bg-violet-600/50 border border-violet-500/40 px-3.5 py-2 text-white transition-all flex items-center gap-1.5 font-bold"
              >
                <HeartHandshake className="h-4 w-4 text-cyan-300 shrink-0" />
                <span>Contribuir</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom copyright & humor signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500 text-center sm:text-left">
          <div>
            <p>&copy; 2026 CS2 Community Server</p>
            <p className="mt-0.5">Infraestrutura comunitária • Sem fins lucrativos</p>
          </div>

          <div className="rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-1 text-gray-400 font-mono text-[10px]">
            ⚡ Powered by PIX, café e decisões questionáveis.
          </div>
        </div>
      </div>
    </footer>
  );
}
