import { Reveal } from "@/components/Reveal";
import lobby from "@/assets/intro-lobby.jpg";
import detail from "@/assets/intro-detail.jpg";

export function Introduction() {
  return (
    <section id="introduction" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow">Notre maison</p>
          <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">
            Une adresse d'exception
          </h2>
          <div className="mt-8 space-y-6 text-[0.98rem] font-light leading-relaxed text-muted-foreground">
            <p>
              Posé sur la rive d'une lagune paisible, à quelques minutes du Plateau, LAGUNE PALACE
              est un hôtel imaginaire conçu comme une parenthèse : pierre ivoire, bois sombre,
              laiton patiné et lumière chaude d'Afrique de l'Ouest.
            </p>
            <p>
              Quarante-huit chambres et suites, un restaurant gastronomique, un spa signature et un
              accès privé à l'eau. Chaque détail a été pensé pour le silence, le confort et le temps
              long.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["48", "Chambres & suites"],
              ["24/7", "Conciergerie"],
              ["5", "Étoiles"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-or">{k}</dt>
                <dd className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <img
            src={lobby}
            alt="Lobby de l'hôtel, style africain contemporain"
            loading="lazy"
            width={1200}
            height={1504}
            className="w-full object-cover"
          />
          <img
            src={detail}
            alt="Détail d'une terrasse avec vue sur la lagune"
            loading="lazy"
            width={912}
            height={912}
            className="absolute -bottom-10 -left-6 hidden w-44 border border-border object-cover sm:block lg:-left-16 lg:w-60"
          />
        </Reveal>
      </div>
    </section>
  );
}
