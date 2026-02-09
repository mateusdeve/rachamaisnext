"use client";

import { motion } from "framer-motion";

export default function HighlightBanner() {
  return (
    <motion.section
      className="bg-primary py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center text-[#121714]">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Mais de 50.000 pessoas já racharam suas contas com a gente!
        </motion.h2>
        <motion.button
          className="bg-white hover:bg-opacity-90 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all cursor-pointer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Começar a usar agora
        </motion.button>
      </div>
    </motion.section>
  );
}
