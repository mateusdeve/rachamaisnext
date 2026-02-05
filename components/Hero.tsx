"use client";

import { Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

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

  return (
    <section className="pt-32 pb-16 px-6" id="inicio">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Divida contas <br /> <span className="text-primary">sem stress</span>
            </h1>
            <p className="text-lg text-[#668573] dark:text-gray-400 max-w-[500px]">
              O RachaMais ajuda você a organizar despesas de viagens, jantares e muito mais com facilidade e total transparência.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className=" w-full lg:w-auto justify-center flex items-center gap-3 bg-[#121714] dark:bg-primary text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer">
              <div className="flex flex-col items-center leading-none justify-center">
                <span className="text-[10px] uppercase opacity-70">Disponível na</span>
                <span className="text-lg">App Store</span>
              </div>
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
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
          <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white dark:bg-[#1f2d25] p-6 rounded-2xl shadow-xl border border-[#dce4e0] dark:border-[#2a3a30] max-w-[200px]">
            <p className="text-primary font-bold text-2xl">R$ 142,50</p>
            <p className="text-sm text-[#668573]">Sua parte no Jantar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
