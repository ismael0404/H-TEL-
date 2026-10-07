import { MapPin, Plane, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow">Nous trouver</p>
          <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">
            Abidjan, Côte d'Ivoire
          </h2>
          <ul className="mt-10 space-y-7">
            {[
              [MapPin, "Boulevard de la Lagune, Cocody", "À 10 minutes du Plateau"],
              [Plane, "Aéroport Félix-Houphouët-Boigny", "Transfert privé en 25 minutes"],
              [Clock, "Arrivée 15h · Départ 12h", "Arrivée anticipée sur demande"],
            ].map(([Icon, title, sub]) => {
              const I = Icon as typeof MapPin;
              return (
                <li key={title as string} className="flex gap-5">
                  <I size={18} className="mt-1 shrink-0 text-or" />
                  <div>
                    <p className="text-ivoire">{title as string}</p>
                    <p className="mt-1 text-sm font-light text-muted-foreground">{sub as string}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative h-[340px] w-full overflow-hidden border border-border bg-secondary lg:h-full lg:min-h-[420px]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 opacity-60"
              style={{ background: "linear-gradient(180deg, transparent, oklch(0.32 0.05 220 / 0.5))" }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <MapPin size={26} className="mx-auto text-or" />
              <p className="mt-4 font-display text-2xl text-ivoire">LAGUNE PALACE</p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                5.324° N · 4.005° O
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
