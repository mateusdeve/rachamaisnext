import { Star } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Lucas Mendes",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1UrNAZGnBz_X2kpNzFRkiQtb7tn7Yd6OMxMODjBSXfRsws3KMKb5Toya8wq4fRkMlEqj-_RprbNBLKCkn6DQ86LgduRM4-s-UFZs5HBnKGHqZwvEkecksCiVbJ05Q9Mv7UVt8XyWJjWULN9BzaIvbE77uh37_zRVTawBTmt7d6P4WGooup_H-H9jOuFjlbqJSkrskkJeglMc6_NQwhXVJzWLWngj0Zr1jncSG2dLMAxQy1mqh87prqtJUdMDCznnu9p-Ky2wl1tnz",
      text: '"Mudou completamente nossas viagens em grupo. Ninguém mais fica perdido com quem deve o que!"',
    },
    {
      name: "Julia Costa",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDo6CCfz942FMX2oZajil1ve5404a639w3aCbeG1rxImj_JZehEWjhSY978d4FgWGyrCLcUdLNvQBk9WaD5SUq0ndhy0RL7AMjEpvrxCekgnyMgOIsRnsCFINYi1dN2_WYriuAH3hWpHiMW0Tfh42AoDT7OSuMzZANt22knjPVkqsMb83Zq0OZ2T5TKBBxr0yN7O21Im-hCJCxB3k3Pdn8-jkSCnPE-SH63UqkUlYreY0m2tyjZhYrAH2hSZZWZfQ2e7yNdcDK3rHHt",
      text: '"Uso para as contas fixas do apartamento. É prático, rápido e evita climas chatos entre os moradores."',
    },
    {
      name: "Pedro Rocha",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA58nrVKl25519-FgAxa03FptjSh3PuIktyurTJfQLpAa06EawI4kH6bMawH9BTK2YsPY424S6XNeL2b-oZGVt456spZqttva1n6bbnOGD7YSkqHRJGTCu_dpQInej8IyQzRu9wJtO0-hFeIOf5jQHYCA0bPOCLEXW4-bHl39twqjUClBJ-zLypwsF7DqOz0QaxYVG284mVqVrTgd6cQpSiVop4hZi58E-z3puQ3jB2TJ4y7fEXouMb13OfepUtYQ35yFxk8cK_hVvP",
      text: '"O melhor app de divisão que já usei. O design é limpo e as notificações ajudam muito a manter tudo em dia."',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">O que dizem nossos usuários</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-[#1a261f] rounded-2xl shadow-sm border border-[#dce4e0] dark:border-[#2a3a30]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="size-12 rounded-full bg-cover bg-center"
                  data-alt={`User avatar - ${testimonial.name}`}
                  style={{ backgroundImage: `url("${testimonial.avatar}")` }}
                ></div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex text-yellow-400 text-xs gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#668573] italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
