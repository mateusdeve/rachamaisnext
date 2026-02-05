import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <>
      <TopNavBar />
      <main className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-primary hover:underline mb-4 inline-block">
              ← Voltar para o início
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Política de Privacidade</h1>
            <p className="text-[#668573] dark:text-gray-400">Última atualização: 5 de fevereiro de 2024</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-[#121714] dark:text-white">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                O RachaMais ("nós", "nosso" ou "aplicativo") respeita sua privacidade e está comprometido em proteger
                seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e
                protegemos suas informações quando você usa nosso aplicativo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Informações que Coletamos</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Informações Fornecidas por Você</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#668573] dark:text-gray-400 mb-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Foto de perfil (opcional)</li>
                <li>Informações de despesas e grupos criados</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Informações Coletadas Automaticamente</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#668573] dark:text-gray-400 mb-4">
                <li>Dados de uso do aplicativo</li>
                <li>Informações do dispositivo (tipo, sistema operacional)</li>
                <li>Endereço IP</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Como Usamos suas Informações</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#668573] dark:text-gray-400 mb-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar e gerenciar grupos e despesas</li>
                <li>Enviar notificações sobre atividades nos grupos</li>
                <li>Comunicar-nos com você sobre o serviço</li>
                <li>Detectar e prevenir fraudes ou atividades suspeitas</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes
                situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#668573] dark:text-gray-400 mb-4">
                <li>
                  <strong>Com outros membros do grupo:</strong> Informações básicas (nome, foto) são visíveis para
                  outros membros dos grupos dos quais você participa
                </li>
                <li>
                  <strong>Prestadores de serviços:</strong> Compartilhamos com provedores que nos ajudam a operar o
                  aplicativo (hospedagem, análise de dados)
                </li>
                <li>
                  <strong>Obrigações legais:</strong> Quando exigido por lei ou para proteger nossos direitos
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Segurança dos Dados</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações
                contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de
                transmissão pela internet ou armazenamento eletrônico é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Seus Direitos</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">Você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#668573] dark:text-gray-400 mb-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Opor-se ao processamento de seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos
                nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Privacidade de Menores</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                O RachaMais não é destinado a menores de 18 anos. Não coletamos intencionalmente informações pessoais
                de menores. Se tomarmos conhecimento de que coletamos informações de um menor, tomaremos medidas para
                excluir essas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Alterações nesta Política</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
                significativas publicando a nova política nesta página e atualizando a data de "Última atualização".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações
                pessoais, entre em contato conosco através do aplicativo ou pelo e-mail:{" "}
                <a href="mailto:privacidade@rachamais.com" className="text-primary hover:underline">
                  privacidade@rachamais.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
