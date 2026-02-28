import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, MessageCircle, HelpCircle, FileQuestion } from "lucide-react";

export const metadata = {
  title: "Suporte | RachaMais",
  description: "Central de ajuda e suporte do RachaMais. Entre em contato ou consulte as perguntas frequentes.",
};

export default function Suporte() {
  return (
    <>
      <TopNavBar />
      <main className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="text-primary hover:underline mb-4 inline-block">
              ← Voltar para o início
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Central de Suporte</h1>
            <p className="text-lg text-[#668573] dark:text-gray-400">
              Estamos aqui para ajudar. Escolha uma das opções abaixo ou entre em contato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <a
              href="mailto:suporte@rachamais.com"
              className="flex gap-4 p-6 rounded-xl border border-[#dce4e0] dark:border-[#2a3a30] bg-white dark:bg-[#1a261f] hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="size-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">E-mail</h2>
                <p className="text-sm text-[#668573] dark:text-gray-400 mb-2">
                  Envie sua dúvida ou solicitação. Respondemos em até 24 horas úteis.
                </p>
                <span className="text-primary font-medium text-sm">suporte@rachamais.com</span>
              </div>
            </a>

            <Link
              href="/#faq"
              className="flex gap-4 p-6 rounded-xl border border-[#dce4e0] dark:border-[#2a3a30] bg-white dark:bg-[#1a261f] hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <HelpCircle className="size-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">Perguntas Frequentes</h2>
                <p className="text-sm text-[#668573] dark:text-gray-400 mb-2">
                  Respostas rápidas para as dúvidas mais comuns sobre o app.
                </p>
                <span className="text-primary font-medium text-sm">Ver FAQ →</span>
              </div>
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileQuestion className="size-6 text-primary" />
              Dúvidas comuns
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#dce4e0] dark:border-[#2a3a30] bg-white dark:bg-[#1a261f]">
                <h3 className="font-bold mb-2">Como recuperar minha senha?</h3>
                <p className="text-sm text-[#668573] dark:text-gray-400">
                  Na tela de login, toque em &quot;Esqueci minha senha&quot; e informe o e-mail cadastrado. Você receberá um link para redefinir a senha.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[#dce4e0] dark:border-[#2a3a30] bg-white dark:bg-[#1a261f]">
                <h3 className="font-bold mb-2">Não consigo entrar no grupo. O que fazer?</h3>
                <p className="text-sm text-[#668573] dark:text-gray-400">
                  Verifique se o link de convite está completo e se não expirou. Peça ao criador do grupo para reenviar o convite. Se o problema continuar, entre em contato pelo e-mail acima.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[#dce4e0] dark:border-[#2a3a30] bg-white dark:bg-[#1a261f]">
                <h3 className="font-bold mb-2">Como reportar um problema ou sugestão?</h3>
                <p className="text-sm text-[#668573] dark:text-gray-400">
                  Envie um e-mail para suporte@rachamais.com descrevendo o problema ou sua sugestão. Inclua prints ou detalhes do dispositivo quando relevante.
                </p>
              </div>
            </div>
          </section>

          <div className="p-6 md:p-8 rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/30 text-center">
            <MessageCircle className="size-10 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Ainda precisa de ajuda?</h2>
            <p className="text-[#668573] dark:text-gray-400 mb-6 max-w-lg mx-auto">
              Nossa equipe está pronta para te atender. Envie um e-mail e responderemos o mais rápido possível.
            </p>
            <a
              href="mailto:suporte@rachamais.com"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <Mail className="size-5" />
              Enviar e-mail
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
