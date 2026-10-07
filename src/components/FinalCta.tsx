import { Reveal } from "@/components/Reveal";
import exterior from "@/assets/gal-exterior.jpg";

export function FinalCta() {
  return (
    <section className="relative flex h-[85svh] min-h-[480px] items-center justify-center overflow-hidden">
      <img
        src={exterior}
        alt="Entrée illuminée de LAGUNE PALACE à la tombée de la nuit"
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="veil absolute inset-0" />
      <Reveal className="relative px-6 text-center">
        <h2 className="mx-auto max-w-4xl text-4xl leading-tight text-ivoire lg:text-7xl">
          Votre prochaine escapade commence ici.
        </h2>
        <a href="#contact" className="btn-or mt-12">
          Réserver votre séjour
        </a>
      </Reveal>
    </section>
  );
}
