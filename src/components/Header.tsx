"use client";

import { Server, HeartHandshake } from "lucide-react";

interface HeaderProps {
  onOpenPixModal: () => void;
}

export function Header({ onOpenPixModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0e1117]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 xs:px-4 sm:px-6">
        {/* Brand & Community Server Info */}
        <div className="flex items-center gap-2 xs:gap-3 min-w-0 pr-2">
          <div className="flex h-9 w-9 xs:h-10 xs:w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/30 border border-violet-500/40 text-cyan-400 shadow-lg shadow-violet-900/20">
            <Server className="h-4 w-4 xs:h-5 xs:w-5 text-cyan-300" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-[10px] xs:text-xs font-bold uppercase tracking-wider text-violet-400 truncate">
                CS2 Community Fund
              </span>
              <span className="hidden xs:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] xs:text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                12 Meses
              </span>
            </div>
            <h1 className="text-xs xs:text-sm sm:text-base font-extrabold tracking-tight text-white truncate">
              Arrecadação VPS
            </h1>
          </div>
        </div>

        {/* CTA Button with 44px touch height */}
        <button
          onClick={onOpenPixModal}
          className="group relative inline-flex min-h-[44px] shrink-0 items-center gap-1.5 xs:gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-violet-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <HeartHandshake className="h-4 w-4 text-cyan-200 transition-transform group-hover:rotate-12" />
          <span>Contribuir</span>
          <span className="hidden sm:inline text-violet-200/80">• R$ 36</span>
        </button>
      </div>
    </header>
  );
}
