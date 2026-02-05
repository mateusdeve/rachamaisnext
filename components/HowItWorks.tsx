import { UserPlus, Receipt, Wallet } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-[#1a261f]" id="como-funciona">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
          <p className="text-[#668573]">Dividir gastos nunca foi tão simples em 3 passos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-[#dce4e0] dark:border-[#2a3a30] hover:shadow-xl transition-shadow group">
            <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary transition-colors">
              <UserPlus className="size-6 group-hover:text-white text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">Crie um grupo</h3>
            <p className="text-[#668573] dark:text-gray-400">
              Dê um nome, adicione uma foto e convide seus amigos em segundos através de um link.
            </p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-[#dce4e0] dark:border-[#2a3a30] hover:shadow-xl transition-shadow group">
            <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary transition-colors">
              <Receipt className="size-6 group-hover:text-white text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">Registre despesas</h3>
            <p className="text-[#668573] dark:text-gray-400">
              Adicione quem pagou, o valor e quem participou daquele gasto específico.
            </p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-[#dce4e0] dark:border-[#2a3a30] hover:shadow-xl transition-shadow group">
            <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary transition-colors">
              <Wallet className="size-6 group-hover:text-white text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">Acerte as contas</h3>
            <p className="text-[#668573] dark:text-gray-400">
              O RachaMais calcula automaticamente o menor número de transferências entre todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
