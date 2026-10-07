import { Reveal } from "@/components/Reveal";
import spa from "@/assets/exp-spa.jpg";

const soins = [
  ["Massages", "Deux à quatre mains, huiles de karité et coco."],
  ["Soins", "Visage & corps, protocoles sur-mesure."],
  ["Hammam", "Marbre sombre, vapeur et savon noir."],
  ["Rituels bien-être", "Parcours de deux heures, du bain au silence."],
];

export function Spa() {
  return (
    <section id="spa" className="relative overflow-hidden">
      <img
        src={spa}
        alt="Cabine de soin du spa, ambiance feutrée"
        loading="lazy"
        width={1200}
        height={1504}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/78" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-44">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Spa signature</p>
          <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-7xl">
            Prenez le temps de ralentir.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {soins.map(([title, text], i) => (
            <Reveal key={title} delay={i * 100} className="border-t border-or/40 pt-6">
              <h3 className="text-2xl text-ivoire">{title}</h3>
              <p className="mt-3 text-sm font-light text-beige/80">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
