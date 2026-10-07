import { Users, Maximize, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import presidentielle from "@/assets/room-presidentielle.jpg";
import lagune from "@/assets/room-lagune.jpg";
import deluxe from "@/assets/room-deluxe.jpg";
import premium from "@/assets/room-premium.jpg";

const rooms = [
  {
    name: "Suite Présidentielle",
    price: "À partir de 350 000 FCFA / nuit",
    image: presidentielle,
    capacity: "4 personnes",
    surface: "180 m²",
    features: ["Terrasse privée", "Majordome", "Salon & salle à manger", "Vue lagune panoramique"],
  },
  {
    name: "Suite Lagune",
    price: "À partir de 250 000 FCFA / nuit",
    image: lagune,
    capacity: "3 personnes",
    surface: "95 m²",
    features: ["Baies vitrées sur l'eau", "Salon séparé", "Bain en pierre", "Petit-déjeuner inclus"],
  },
  {
    name: "Chambre Deluxe",
    price: "À partir de 150 000 FCFA / nuit",
    image: deluxe,
    capacity: "2 personnes",
    surface: "55 m²",
    features: ["Balcon tropical", "Lit king size", "Bureau", "Accès spa"],
  },
  {
    name: "Chambre Premium",
    price: "À partir de 110 000 FCFA / nuit",
    image: premium,
    capacity: "2 personnes",
    surface: "38 m²",
    features: ["Literie sur-mesure", "Coin lecture", "Minibar signature", "Wi-Fi haut débit"],
  },
];

export function Rooms() {
  return (
    <section id="chambres" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Séjourner</p>
          <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">
            Chambres & suites
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          {rooms.map((room, i) => (
            <Reveal key={room.name} delay={(i % 2) * 120} as="article" className="group">
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 lg:h-[420px]"
                />
              </div>
              <div className="mt-7 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl text-ivoire lg:text-3xl">{room.name}</h3>
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-or">
                  {room.price}
                </span>
              </div>
              <div className="mt-4 flex gap-7 text-[0.75rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Users size={14} className="text-or" /> {room.capacity}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Maximize size={14} className="text-or" /> {room.surface}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-light text-muted-foreground">
                {room.features.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-ivoire transition-colors hover:text-or"
              >
                Découvrir
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
