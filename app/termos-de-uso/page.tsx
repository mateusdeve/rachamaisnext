import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermosUso() {
  return (
    <>
      <TopNavBar />
      <main className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-primary hover:underline mb-4 inline-block">
              ← Voltar para o início
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Termos de Uso</h1>
            <p className="text-[#668573] dark:text-gray-400">Última atualização: 5 de fevereiro de 2024</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-[#121714] dark:text-white">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Ao acessar e usar o aplicativo RachaMais ("aplicativo", "serviço"), você concorda em cumprir e estar
                vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve
                usar nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                O RachaMais é uma plataforma que permite aos usuários criar grupos, registrar despesas compartilhadas e
                calcular automaticamente os valores devidos entre os membros do grupo. O aplicativo não processa
                pagamentos reais, apenas facilita o cálculo e organização de despesas compartilhadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Elegibilidade</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Você deve ter pelo menos 18 anos de idade para usar o RachaMais. Ao usar o serviço, você declara e
                garante que tem pelo menos 18 anos e tem capacidade legal para celebrar contratos vinculativos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Conta de Usuário</h2>
              <h3 className="text-xl font-semibold mb-3">4.1 Registro</h3>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Para usar certas funcionalidades do aplicativo, você precisará criar uma conta. Você concorda em
                fornecer informações precisas, completas e atualizadas durante o registro.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.2 Segurança da Conta</h3>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as
                atividades que ocorrem sob sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso
                não autorizado de sua conta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Uso Aceitável</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">Você concorda em NÃO:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#668573] dark:text-gray-400 mb-4">
                <li>Usar o serviço para qualquer propósito ilegal ou não autorizado</li>
                <li>Violar qualquer lei local, estadual, nacional ou internacional</li>
                <li>Transmitir qualquer conteúdo que seja difamatório, ofensivo ou prejudicial</li>
                <li>Interferir ou interromper o funcionamento do serviço</li>
                <li>Tentar obter acesso não autorizado a qualquer parte do serviço</li>
                <li>Usar o serviço para enganar ou defraudar outros usuários</li>
                <li>Criar contas falsas ou usar identidades falsas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Conteúdo do Usuário</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Você mantém todos os direitos sobre o conteúdo que cria ou envia através do aplicativo. Ao usar o
                serviço, você concede ao RachaMais uma licença mundial, não exclusiva e gratuita para usar,
                reproduzir, modificar e exibir seu conteúdo apenas para fornecer e melhorar o serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                O RachaMais é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será
                ininterrupto, seguro ou livre de erros. Não seremos responsáveis por quaisquer danos diretos,
                indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar o serviço.
              </p>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                O RachaMais não processa pagamentos reais e não é responsável por disputas financeiras entre usuários.
                Qualquer acordo financeiro entre usuários é de sua responsabilidade exclusiva.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Propriedade Intelectual</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Todo o conteúdo do aplicativo, incluindo design, texto, gráficos, logotipos e software, é propriedade
                do RachaMais ou de seus licenciadores e está protegido por leis de direitos autorais e outras leis de
                propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modificações do Serviço</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do serviço a qualquer
                momento, com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por qualquer
                modificação, suspensão ou descontinuação do serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Rescisão</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Podemos encerrar ou suspender sua conta e acesso ao serviço imediatamente, sem aviso prévio, por
                qualquer motivo, incluindo se você violar estes Termos de Uso. Após a rescisão, seu direito de usar o
                serviço cessará imediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Lei Aplicável</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem dar efeito a
                quaisquer princípios de conflitos de leis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Alterações nos Termos</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Notificaremos você sobre
                mudanças significativas publicando os novos termos nesta página. Seu uso continuado do serviço após
                tais modificações constitui sua aceitação dos termos revisados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contato</h2>
              <p className="text-[#668573] dark:text-gray-400 mb-4">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do aplicativo ou
                pelo e-mail:{" "}
                <a href="mailto:suporte@rachamais.com" className="text-primary hover:underline">
                  suporte@rachamais.com
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
