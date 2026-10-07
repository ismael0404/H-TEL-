import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm text-ivoire placeholder:text-muted-foreground focus:border-or focus:outline-none transition-colors";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Réservation</p>
            <h2 className="mt-6 text-4xl leading-tight text-ivoire lg:text-6xl">
              Écrivez-nous
            </h2>
            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Notre conciergerie répond sous 24 heures et prépare chaque séjour sur-mesure :
              transferts, table au restaurant, rituels de spa.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="grid gap-7 sm:grid-cols-2">
              <input className={field} name="nom" placeholder="Nom" required />
              <input className={field} name="email" type="email" placeholder="Email" required />
              <input className={field} name="telephone" type="tel" placeholder="Téléphone" />
              <input
                className={field}
                name="personnes"
                type="number"
                min={1}
                placeholder="Nombre de personnes"
              />
              <label className="text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
                Date d'arrivée
                <input className={field} name="arrivee" type="date" required />
              </label>
              <label className="text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
                Date de départ
                <input className={field} name="depart" type="date" required />
              </label>
              <textarea
                className={`${field} sm:col-span-2`}
                name="message"
                rows={3}
                placeholder="Message"
              />
              <div className="sm:col-span-2">
                <button type="submit" className="btn-or">
                  Envoyer une demande
                </button>
                {sent && (
                  <p className="mt-5 text-sm font-light text-or">
                    Merci, votre demande a bien été enregistrée. Notre conciergerie vous répond
                    sous 24 heures.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
