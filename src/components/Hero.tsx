import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-lagune.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.22, 160));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="accueil" className="relative h-[100svh] min-h-[620px] overflow-hidden">
      <div className="absolute inset-0" style={{ transform: `translateY(${offset}px)` }}>
        <img
          src={heroImg}
          alt="LAGUNE PALACE au bord de la lagune d'Abidjan au crépuscule"
          width={1920}
          height={1200}
          className="slow-zoom h-[115%] w-full object-cover"
        />
      </div>
      <div className="veil absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
        <p className="eyebrow mb-6">Abidjan · Côte d'Ivoire</p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] text-ivoire sm:text-6xl lg:text-8xl">
          L'élégance au cœur d'Abidjan.
        </h1>
        <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-beige">
          Une expérience unique entre confort, gastronomie et sérénité.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <a href="#introduction" className="btn-or">
            Découvrir l'hôtel
          </a>
          <a href="#contact" className="btn-ghost-or">
            Réserver un séjour
          </a>
        </div>
      </div>

      <a
        href="#introduction"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-or"
      >
        <ChevronDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}
