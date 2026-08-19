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
    <footer className="mt-16 border-t border-white/10 bg-[#0a0d13] pt-10 pb-8 text-xs text-gray-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Identity & Subtitle */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-cyan-400 border border-violet-500/30">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base">CS2 COMMUNITY FUND</h3>
                <p className="text-xs text-violet-300 font-mono">11 jogadores • 1 VPS • 12 meses</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 italic">"Feito pela comunidade, para a comunidade."</p>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3.5 py-2 text-xs font-bold text-emerald-400 border border-emerald-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>🟢 Campanha em andamento</span>
          </div>

          {/* Links & Actions */}
          <div className="flex items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => scrollToSection("servidor")}
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Activity className="h-3.5 w-3.5 text-violet-400" />
              <span>Servidor</span>
            </button>
            <button
              onClick={() => scrollToSection("transparencia")}
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
              <span>Transparência</span>
            </button>
            {onOpenPixModal && (
              <button
                onClick={onOpenPixModal}
                className="rounded-lg bg-violet-600/30 hover:bg-violet-600/50 border border-violet-500/40 px-3 py-1.5 text-white transition-all flex items-center gap-1"
              >
                <HeartHandshake className="h-3.5 w-3.5 text-cyan-300" />
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
