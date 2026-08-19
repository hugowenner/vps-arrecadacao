import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arrecadação VPS Servidor — CS2 Community",
  description: "Financiamento coletivo de 12 meses de infraestrutura para o servidor da comunidade CS2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-violet-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
