"use client";

import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <motion.section
      className="py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-[1000px] mx-auto bg-[#121714] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Pronto pra parar de fazer conta de cabeça?
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-10 text-lg relative z-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Baixe agora e comece a rachar tudo com facilidade.
        </motion.p>
        <motion.div
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <motion.button
            className="flex items-center gap-3 bg-white text-[#121714] px-8 py-4 rounded-xl font-bold shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Smartphone className="size-8" />
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[10px] uppercase opacity-70">Baixe agora na</span>
              <span className="text-xl">App Store</span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
