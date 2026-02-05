import Link from "next/link";
import { Wallet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#dce4e0] dark:border-[#2a3a30]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                <Wallet className="size-4" />
              </div>
              <Link href="/">
                <h2 className="text-lg font-bold">RachaMais</h2>
              </Link>
            </div>
            <p className="text-[#668573] max-w-xs text-sm">
              A solução definitiva para dividir despesas entre amigos, família e colegas de quarto.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Produto</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#668573]">
              <li>
                <a className="hover:text-primary" href="#funcionalidades">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#como-funciona">
                  Como funciona
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#inicio">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#dce4e0] dark:border-[#2a3a30] text-xs text-[#668573]">
          <p>© 2024 RachaMais. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link className="hover:text-primary" href="/termos-de-uso">
              Termos de Uso
            </Link>
            <Link className="hover:text-primary" href="/politica-de-privacidade">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
