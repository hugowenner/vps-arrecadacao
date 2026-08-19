"use client";

import { Server, ShieldCheck, HeartHandshake } from "lucide-react";

interface HeaderProps {
  onOpenPixModal: () => void;
}

export function Header({ onOpenPixModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0e1117]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand & Community Server Info */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/30 border border-violet-500/40 text-cyan-400 shadow-lg shadow-violet-900/20">
            <Server className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-violet-400">
                CS2 Community Fund
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                12 Meses
              </span>
            </div>
            <h1 className="text-base font-extrabold tracking-tight text-white sm:text-lg">
              Arrecadação VPS
            </h1>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenPixModal}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-violet-900/30 transition-all hover:scale-[1.02] hover:shadow-cyan-900/40 active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <HeartHandshake className="h-4 w-4 text-cyan-200 transition-transform group-hover:rotate-12" />
          <span>Contribuir</span>
          <span className="hidden text-violet-200/80 sm:inline">• R$ 36</span>
        </button>
      </div>
    </header>
  );
}
