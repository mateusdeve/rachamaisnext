import { Smartphone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto bg-[#121714] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
          Pronto pra parar de fazer conta de cabeça?
        </h2>
        <p className="text-gray-400 mb-10 text-lg relative z-10">Baixe agora e comece a rachar tudo com facilidade.</p>
        <div className="flex justify-center relative z-10">
          <button className="flex items-center gap-3 bg-white text-[#121714] px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer">
            <Smartphone className="size-8" />
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[10px] uppercase opacity-70">Baixe agora na</span>
              <span className="text-xl">App Store</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
