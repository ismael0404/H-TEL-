import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const avis = [
  {
    name: "Aminata Diabaté",
    city: "Abidjan",
    text: "Le silence de la suite Lagune au lever du jour, le café servi sur la terrasse : rien à redire, tout est juste.",
  },
  {
    name: "Julien Marchand",
    city: "Paris",
    text: "Un service d'une discrétion rare. Le dîner au restaurant LAGUNE reste le meilleur repas de mon année.",
  },
  {
    name: "Grace Owusu",
    city: "Accra",
    text: "Le rituel du spa dure deux heures et l'on en ressort transformée. Le hammam est somptueux.",
  },
  {
    name: "Karim Belhadj",
    city: "Casablanca",
    text: "Séjour d'affaires parfaitement orchestré, de l'accueil à l'aéroport jusqu'au départ. Je reviendrai.",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Ils y ont séjourné</p>
          <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">Avis</h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {avis.map((a, i) => (
            <Reveal key={a.name} delay={(i % 2) * 120} className="border-t border-border pt-8">
              <div className="flex gap-1 text-or">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-6 font-display text-xl font-light leading-relaxed text-ivoire lg:text-2xl">
                « {a.text} »
              </p>
              <p className="mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                {a.name} — {a.city}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
