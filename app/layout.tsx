import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "RachaMais - Divida contas sem stress",
  description: "O RachaMais ajuda você a organizar despesas de viagens, jantares e muito mais com facilidade e total transparência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className={`${manrope.variable} font-display bg-background-light dark:bg-background-dark text-[#121714] dark:text-white transition-colors duration-300`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
