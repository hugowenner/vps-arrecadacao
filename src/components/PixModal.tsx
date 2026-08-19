"use client";

import { useState } from "react";
import { X, Copy, Check, QrCode, ShieldAlert, ArrowRight, Send, HelpCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
  pixKey: string;
  pixKeyType: string;
  contributionAmount: number;
  adminContactLink: string;
  adminContactLabel: string;
}

export function PixModal({
  isOpen,
  onClose,
  pixKey,
  pixKeyType,
  contributionAmount,
  adminContactLink,
  adminContactLabel,
}: PixModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#121620] p-4 xs:p-5 sm:p-7 text-white shadow-2xl shadow-violet-950/50 z-10 my-auto no-scrollbar">
        {/* Close Button with 44px touch area */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 xs:right-4 xs:top-4 rounded-xl p-2.5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 xs:gap-3 pr-10">
          <div className="flex h-10 w-10 xs:h-11 xs:w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
            <QrCode className="h-5 w-5 xs:h-6 xs:w-6" />
          </div>
          <div>
            <h2 className="text-base xs:text-lg sm:text-xl font-bold text-white leading-snug">
              Pagamento PIX
            </h2>
            <p className="text-[11px] xs:text-xs text-gray-400">
              Cota individual para infraestrutura do CS Stats
            </p>
          </div>
        </div>

        {/* Contribution Amount Highlight */}
        <div className="mt-4 sm:mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 xs:p-4 text-center">
          <span className="text-[10px] xs:text-xs uppercase font-bold text-emerald-400 tracking-wider">
            Cota Individual
          </span>
          <div className="text-2xl xs:text-3xl font-black text-white mt-0.5 font-mono">
            {formatCurrency(contributionAmount)}
          </div>
          <p className="text-[10px] xs:text-[11px] text-emerald-300/80 mt-1">
            Contribuição única por jogador (12 meses de VPS)
          </p>
        </div>

        {/* Official QR Code Display Container */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/40 p-4 xs:p-5 text-center">
          <div className="relative flex h-44 w-44 xs:h-52 xs:w-52 sm:h-56 sm:w-56 items-center justify-center rounded-2xl bg-white p-3 shadow-xl border-4 border-violet-500/30">
            <img
              src="/qrcode.png"
              alt="QR Code PIX para pagamento da cota"
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
          <p className="mt-3 text-[11px] xs:text-xs text-gray-300 font-medium leading-tight">
            Escaneie o QR Code acima pelo aplicativo do seu banco
          </p>
        </div>

        {/* Copy PIX Key Container */}
        <div className="mt-4 sm:mt-5">
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">
            Chave PIX ({pixKeyType}):
          </label>
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
            <div className="relative flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 font-mono text-[11px] xs:text-xs text-cyan-300 font-bold select-all break-all xs:truncate">
              {pixKey}
            </div>
            <button
              onClick={handleCopy}
              className={`flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-violet-600 hover:bg-violet-500 active:scale-95 shadow-md shadow-violet-900/40"
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 shrink-0" />
                  <span>Chave PIX copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 shrink-0" />
                  <span>Copiar chave PIX</span>
                </>
              )}
            </button>
          </div>
          {copied && (
            <p className="mt-1.5 text-xs text-emerald-400 font-bold flex items-center gap-1">
              <Check className="h-3.5 w-3.5 shrink-0" /> Chave PIX copiada! Cole no aplicativo do seu banco.
            </p>
          )}
        </div>

        {/* Instructions Steps */}
        <div className="mt-4 sm:mt-5 space-y-2 border-t border-white/10 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 shrink-0" />
            Como realizar o pagamento:
          </h3>
          <ol className="text-xs text-gray-300 space-y-1.5 pl-4 list-decimal marker:text-violet-400">
            <li>Abra o app do seu banco e acesse o menu <strong>PIX</strong>.</li>
            <li>Escolha a opção <strong>PIX Copia e Cola</strong> ou escaneie o QR Code.</li>
            <li>Confirme o valor exato de <strong>{formatCurrency(contributionAmount)}</strong>.</li>
            <li>Conclua a transferência e salve o <strong>comprovante</strong>.</li>
          </ol>
        </div>

        {/* Notice & Send Receipt to Admin */}
        <div className="mt-4 sm:mt-5 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3.5 text-xs text-amber-200">
          <div className="flex items-start gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-300">
                Envie o comprovante após realizar o pagamento.
              </p>
              <p className="mt-0.5 text-amber-200/90 text-[11px]">
                Após a transferência, envie o comprovante ao administrador para confirmar sua cota como <span className="font-bold text-emerald-400">🟢 Pago</span>.
              </p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex justify-end">
            {adminContactLink && adminContactLink !== "#" ? (
              <a
                href={adminContactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 px-3 py-2 text-xs font-bold text-amber-200 transition-colors min-h-[40px]"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{adminContactLabel}</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-gray-400 cursor-not-allowed border border-white/5 min-h-[40px]"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{adminContactLabel}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
