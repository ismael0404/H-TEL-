import { Reveal } from "@/components/Reveal";
import restaurant from "@/assets/restaurant.jpg";

const highlights = [
  ["Cuisine africaine contemporaine", "Des classiques ivoiriens revisités avec précision."],
  ["Produits locaux", "Pêche de la lagune, maraîchers d'Anyama, cacao du Sud."],
  ["Le chef", "Aïcha Konaté, formée à Abidjan puis à Lyon."],
  ["Terrasse avec vue", "Dîner au bord de l'eau, à la lueur des lanternes."],
];

export function Restaurant() {
  return (
    <section id="restaurant" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-40">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Restaurant « LAGUNE »</p>
          <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">
            Une cuisine qui raconte une histoire
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {highlights.map(([title, text]) => (
              <li key={title} className="py-5">
                <h3 className="text-lg text-ivoire">{title}</h3>
                <p className="mt-1.5 text-sm font-light text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-light text-muted-foreground">
            Menu dégustation en sept services — 85 000 FCFA. Service de 19h à 23h.
          </p>
          <a href="#contact" className="btn-or mt-9">
            Découvrir le restaurant
          </a>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <img
            src={restaurant}
            alt="Plat gastronomique servi sur la terrasse du restaurant LAGUNE"
            loading="lazy"
            width={1600}
            height={1104}
            className="w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
