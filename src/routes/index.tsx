import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Rooms } from "@/components/Rooms";
import { Experiences } from "@/components/Experiences";
import { Restaurant } from "@/components/Restaurant";
import { Spa } from "@/components/Spa";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

const title = "LAGUNE PALACE — Hôtel 5 étoiles au bord de la lagune d'Abidjan";
const description =
  "Hôtel 5 étoiles fictif à Abidjan : suites avec vue lagune, restaurant gastronomique, spa signature et accès privé à l'eau.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Rooms />
        <Experiences />
        <Restaurant />
        <Spa />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
