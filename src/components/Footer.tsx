import { Instagram, Facebook, Linkedin } from "lucide-react";

const quick = [
  { label: "Chambres", href: "#chambres" },
  { label: "Expériences", href: "#experiences" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Spa", href: "#spa" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-xl tracking-[0.34em] text-ivoire">LAGUNE</p>
          <p className="mt-1 text-[0.6rem] tracking-[0.55em] text-or">PALACE</p>
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            Hôtel 5 étoiles imaginaire, au bord de la lagune d'Abidjan.
          </p>
        </div>

        <div>
          <p className="eyebrow">Adresse</p>
          <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
            Boulevard de la Lagune, Cocody
            <br />
            Abidjan, Côte d'Ivoire
          </p>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <p className="mt-5 space-y-1 text-sm font-light leading-relaxed text-muted-foreground">
            +225 27 22 00 00 00
            <br />
            reservations@lagunepalace.ci
            <br />
            Réception 24h/24 · Restaurant 19h–23h
          </p>
        </div>

        <div>
          <p className="eyebrow">Liens rapides</p>
          <ul className="mt-5 space-y-2.5">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  className="text-sm font-light text-muted-foreground transition-colors hover:text-or"
                >
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex gap-5 text-muted-foreground">
            <a href="#accueil" aria-label="Instagram" className="transition-colors hover:text-or">
              <Instagram size={18} />
            </a>
            <a href="#accueil" aria-label="Facebook" className="transition-colors hover:text-or">
              <Facebook size={18} />
            </a>
            <a href="#accueil" aria-label="LinkedIn" className="transition-colors hover:text-or">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-[1400px] px-6 py-7 text-center text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground lg:px-10">
          © 2026 LAGUNE PALACE — Hôtel fictif
        </p>
      </div>
    </footer>
  );
}
