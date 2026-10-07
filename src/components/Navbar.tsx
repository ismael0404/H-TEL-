import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Chambres", href: "#chambres" },
  { label: "Expériences", href: "#experiences" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Spa", href: "#spa" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "border-b border-border bg-background/92 py-4 backdrop-blur-md"
          : "border-b border-transparent py-7",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#accueil" className="group leading-none">
          <span className="font-display text-xl tracking-[0.34em] text-ivoire">LAGUNE</span>
          <span className="mt-1 block text-[0.6rem] tracking-[0.55em] text-or">PALACE</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-nav">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn-or hidden sm:inline-flex">
            Réserver
          </a>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-ivoire lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/97 px-6 py-6 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-nav" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-or w-full" onClick={() => setOpen(false)}>
                Réserver
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
