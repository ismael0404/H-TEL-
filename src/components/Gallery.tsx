import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-lagune.jpg";
import lobby from "@/assets/intro-lobby.jpg";
import bath from "@/assets/gal-bath.jpg";
import bar from "@/assets/gal-bar.jpg";
import exterior from "@/assets/gal-exterior.jpg";
import hammam from "@/assets/spa-hammam.jpg";
import piscine from "@/assets/exp-piscine.jpg";
import restaurant from "@/assets/restaurant.jpg";

const photos = [
  { src: lobby, alt: "Lobby de l'hôtel" },
  { src: bath, alt: "Salle de bain avec vue sur la lagune" },
  { src: bar, alt: "Bar à cocktails" },
  { src: hero, alt: "L'hôtel au bord de la lagune" },
  { src: hammam, alt: "Hammam du spa" },
  { src: piscine, alt: "Piscine panoramique" },
  { src: exterior, alt: "Entrée de l'hôtel à la tombée du jour" },
  { src: restaurant, alt: "Table du restaurant LAGUNE" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="galerie" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">En images</p>
        <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">Galerie</h2>
      </Reveal>

      <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {photos.map((p, i) => (
          <Reveal key={p.alt} delay={(i % 3) * 90} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden"
              aria-label={`Agrandir : ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute right-6 top-6 p-2 text-ivoire transition-colors hover:text-or"
            onClick={() => setActive(null)}
          >
            <X size={26} />
          </button>
          <img
            src={photos[active]?.src}
            alt={photos[active]?.alt ?? ""}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
