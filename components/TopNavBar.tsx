import Link from "next/link";
import { Wallet } from "lucide-react";

export default function TopNavBar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dce4e0] dark:border-[#2a3a30]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Wallet className="size-5" />
          </div>
          <Link href="/">
            <h2 className="text-xl font-bold tracking-tight">RachaMais</h2>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#inicio">
            Início
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#como-funciona">
            Como funciona
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#funcionalidades">
            Funcionalidades
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#faq">
            FAQ
          </a>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 cursor-pointer">
          Download
        </button>
      </div>
    </div>
  );
}
