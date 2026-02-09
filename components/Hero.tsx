"use client";

import { Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const sectionVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Hero() {
  const images = [
    "/images/img1.jpeg",
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img6.jpeg",
    "/images/img7.jpeg",
    "/images/img9.jpeg",
    "/images/img10.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const viewport = { once: true, amount: 0.2 };

  return (
    <motion.section
      className="pt-32 pb-16 px-6"
      id="inicio"
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      variants={sectionVariants}
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              Divida contas <br /> <span className="text-primary">sem stress</span>
            </motion.h1>
            <motion.p
              className="text-lg text-[#668573] dark:text-gray-400 max-w-[500px]"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              O RachaMais ajuda você a organizar despesas de viagens, jantares e muito mais com facilidade e total transparência.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-wrap gap-4"
            variants={{
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            }}
          >
            <motion.button
              className="w-full lg:w-auto justify-center flex items-center gap-4 bg-white text-[#121714] px-8 py-4 rounded-xl font-bold shadow-xl cursor-pointer border-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Smartphone className="size-8 text-[#121714]" />
              <div className="flex flex-col items-start leading-none justify-center text-left">
                <span className="text-[10px] uppercase font-normal text-gray-500">Baixe agora na</span>
                <span className="text-lg font-bold text-[#121714]">App Store</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="relative flex justify-center"
          variants={{
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          <div className="w-[300px] h-[600px] bg-[#121714] rounded-[3rem] border-[8px] border-[#2a3a30] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a3a30] rounded-b-2xl z-10"></div>
            <div className="w-full h-full relative overflow-hidden bg-white">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`RachaMais app screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    sizes="300px"
                  />
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className="absolute -bottom-6 -right-6 md:-right-12 bg-white dark:bg-[#1f2d25] p-6 rounded-2xl shadow-xl border border-[#dce4e0] dark:border-[#2a3a30] max-w-[200px]"
            variants={{
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
            }}
          >
            <p className="text-primary font-bold text-2xl">R$ 142,50</p>
            <p className="text-sm text-[#668573]">Sua parte no Jantar</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
