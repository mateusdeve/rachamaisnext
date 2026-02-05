import { Smartphone } from "lucide-react";

export default function Hero() {
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
            <div
              className="w-full h-full bg-cover bg-center"
              data-alt="iPhone mockup showing RachaMais app interface with expense list"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4k2o8WP-hji0UznNzd8ulPdXlCJ655zensF9Z1qxGOitP0wry3rQlt8q2ZjU-EEuF6ST4WzyEqrvfR560Zjsl5gLQwopZNneogfffCB_9MJVR7jLbppc21l-jYKnLWkthsi8FZuvhrr9BlK4J7FIcwYTTSWz1taCbX7JLSvjla3VJv_DfHyUrE1DjgE-jUHZGeoriyYy6iox-Wsdg3NbpTCT5vuIB9bpgWDdkTgp2WY5pFfTuxLck2VxHh95nJVP9LvOQuDzbbswt")',
              }}
            ></div>
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
