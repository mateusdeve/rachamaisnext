import { CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Divisão igualitária",
      description: "Divida por igual, por porcentagem ou valor exato.",
    },
    {
      title: "Cálculo automático",
      description: "Precisão matemática sem precisar de calculadoras.",
    },
    {
      title: "Grupos ilimitados",
      description: "Organize viagens, churrascos e a casa separadamente.",
    },
    {
      title: "Histórico de gastos",
      description: "Acompanhe todos os lançamentos passados com clareza.",
    },
    {
      title: "Notificações",
      description: "Fique por dentro quando alguém adiciona ou paga algo.",
    },
    {
      title: "Exportação de dados",
      description: "Gere PDFs ou planilhas de todos os gastos do grupo.",
    },
  ];

  return (
    <section className="py-20 px-6" id="funcionalidades">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl font-bold">Funcionalidades</h2>
          <p className="text-[#668573] dark:text-gray-400 max-w-[600px]">
            Tudo o que você precisa para uma gestão financeira compartilhada e descomplicada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl border border-[#dce4e0] dark:border-[#2a3a30] bg-white dark:bg-[#1a261f]"
            >
              <CheckCircle className="size-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">{feature.title}</h4>
                <p className="text-sm text-[#668573]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
