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

  const isPlaceholderKey = pixKey === "INSIRA_SUA_CHAVE_PIX_AQUI";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#121620] p-5 sm:p-7 text-white shadow-2xl shadow-violet-950/50 z-10 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pr-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
            <QrCode className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl">
              Pagamento via PIX
            </h2>
            <p className="text-xs text-gray-400">
              Contribuição de cota individual para VPS
            </p>
          </div>
        </div>

        {/* Contribution Amount Highlight */}
        <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
          <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
            Valor da sua cota
          </span>
          <div className="text-3xl font-black text-white mt-0.5">
            {formatCurrency(contributionAmount)}
          </div>
          <p className="text-[11px] text-emerald-300/80 mt-1">
            Contribuição única por jogador (12 meses de servidor)
          </p>
        </div>

        {/* QR Code Placeholder Box */}
        <div className="mt-5 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/40 p-6 text-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-lg border border-dashed border-violet-500/40 bg-violet-950/20 p-2">
            {/* Visual SVG QR Representation */}
            <div className="grid grid-cols-4 gap-2 opacity-80">
              <div className="h-8 w-8 bg-cyan-400/70 rounded" />
              <div className="h-8 w-8 bg-violet-400/70 rounded" />
              <div className="h-8 w-8 bg-white/70 rounded" />
              <div className="h-8 w-8 bg-cyan-400/70 rounded" />
              <div className="h-8 w-8 bg-white/70 rounded" />
              <div className="h-8 w-8 bg-violet-400/70 rounded" />
              <div className="h-8 w-8 bg-cyan-400/70 rounded" />
              <div className="h-8 w-8 bg-white/70 rounded" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] rounded-lg p-3">
              <QrCode className="h-8 w-8 text-cyan-400 mb-1" />
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">
                QR Code PIX
              </span>
              {isPlaceholderKey && (
                <span className="mt-1 text-[9px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Placeholder
                </span>
              )}
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Escaneie pelo aplicativo do seu banco ou copie a chave abaixo
          </p>
        </div>

        {/* Copy PIX Key Container */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">
            Chave PIX ({pixKeyType})
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 font-mono text-xs text-gray-200 truncate">
              {pixKey}
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-violet-600 hover:bg-violet-500 active:scale-95"
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          {copied && (
            <p className="mt-1.5 text-xs text-emerald-400 font-medium flex items-center gap-1">
              <Check className="h-3.5 w-3.5" /> Chave PIX copiada para a área de transferência!
            </p>
          )}
        </div>

        {/* Instructions Steps */}
        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5" />
            Como realizar o pagamento:
          </h3>
          <ol className="text-xs text-gray-300 space-y-1.5 pl-4 list-decimal marker:text-violet-400">
            <li>Abra o app do seu banco e selecione a opção <strong>PIX</strong>.</li>
            <li>Escolha <strong>PIX Copia e Cola</strong> e cole a chave copiada acima.</li>
            <li>Confirme o valor exato de <strong>{formatCurrency(contributionAmount)}</strong>.</li>
            <li>Após concluir a transferência, salve o <strong>comprovante</strong>.</li>
          </ol>
        </div>

        {/* Notice & Send Receipt to Admin */}
        <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3.5 text-xs text-amber-200">
          <div className="flex items-start gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-300">
                Aviso de confirmação manual:
              </p>
              <p className="mt-0.5 text-amber-200/90 text-[11px]">
                Envie o comprovante para o administrador para que o seu status seja atualizado para <span className="font-bold text-emerald-400">🟢 Pago</span>.
              </p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex justify-end">
            {adminContactLink && adminContactLink !== "#" ? (
              <a
                href={adminContactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 px-3 py-1.5 text-xs font-bold text-amber-200 transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{adminContactLabel}</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-400 cursor-not-allowed border border-white/5"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{adminContactLabel} (Placeholder)</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
