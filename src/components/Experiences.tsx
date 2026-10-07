import { Reveal } from "@/components/Reveal";
import piscine from "@/assets/exp-piscine.jpg";
import spa from "@/assets/exp-spa.jpg";
import gym from "@/assets/exp-gym.jpg";
import lagune from "@/assets/exp-lagune.jpg";

const experiences = [
  { name: "Piscine panoramique", text: "Bassin à débordement face au coucher de soleil.", image: piscine },
  { name: "Spa & bien-être", text: "Rituels signature inspirés des traditions ivoiriennes.", image: spa },
  { name: "Salle de sport", text: "Studio ouvert sur l'eau, coaching privé sur demande.", image: gym },
  { name: "Accès privé à la lagune", text: "Ponton, pirogue et sorties au fil de l'eau.", image: lagune },
];

export function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Vivre l'hôtel</p>
        <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">Expériences</h2>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((e, i) => (
          <Reveal key={e.name} delay={i * 100} as="article" className="group relative overflow-hidden">
            <img
              src={e.image}
              alt={e.name}
              loading="lazy"
              width={1200}
              height={1504}
              className="h-[420px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110 lg:h-[520px]"
            />
            <div className="veil absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="text-2xl text-ivoire">{e.name}</h3>
              <p className="mt-3 max-h-0 overflow-hidden text-sm font-light text-beige opacity-0 transition-all duration-700 group-hover:max-h-24 group-hover:opacity-100">
                {e.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
