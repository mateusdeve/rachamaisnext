"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const viewport = { once: true, amount: 0.2 };
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O RachaMais é gratuito?",
      answer:
        "Sim, as funcionalidades principais de criar grupos, adicionar despesas e calcular acertos são 100% gratuitas.",
    },
    {
      question: "Preciso de internet para usar?",
      answer:
        "Sim, o RachaMais requer conexão com a internet para sincronizar dados entre os membros do grupo e manter tudo atualizado em tempo real.",
    },
    {
      question: "Como convido amigos para o grupo?",
      answer:
        "Ao criar um grupo, você receberá um link único de convite. Compartilhe esse link com seus amigos através de WhatsApp, email ou qualquer outro meio. Eles só precisam clicar no link para entrar no grupo.",
    },
    {
      question: "O app faz pagamentos direto?",
      answer:
        "Não, o RachaMais não processa pagamentos. O app apenas calcula quem deve quanto para quem, facilitando o acerto de contas. Os pagamentos são feitos diretamente entre os membros do grupo através dos métodos que preferirem.",
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-white dark:bg-[#1a261f]"
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      <div className="max-w-[800px] mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
        >
          Perguntas Frequentes
        </motion.h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#dce4e0] dark:border-[#2a3a30] rounded-xl overflow-hidden"
              variants={itemVariants}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold">{faq.question}</span>
                <ChevronDown
                  className={`size-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-[#668573] dark:text-gray-400 text-sm">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
