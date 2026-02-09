"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

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
    <motion.section
      className="py-20 px-6"
      id="funcionalidades"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">Funcionalidades</h2>
          <p className="text-[#668573] dark:text-gray-400 max-w-[600px]">
            Tudo o que você precisa para uma gestão financeira compartilhada e descomplicada.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex gap-4 p-6 rounded-xl border border-[#dce4e0] dark:border-[#2a3a30] bg-white dark:bg-[#1a261f]"
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <CheckCircle className="size-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">{feature.title}</h4>
                <p className="text-sm text-[#668573]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
