import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/home/Services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "United Health — Comprehensive Care for Your Family" },
      { name: "description", content: "From everyday checkups to specialized care, everything your family needs in one place at United Health." },
      { property: "og:title", content: "United Health — Comprehensive Care for Your Family" },
      { property: "og:description", content: "From everyday checkups to specialized care, everything your family needs in one place." },
      { property: "og:url", content: "https://service-section.lovable.app/" },
      { name: "twitter:title", content: "United Health — Comprehensive Care for Your Family" },
      { name: "twitter:description", content: "From everyday checkups to specialized care, everything your family needs in one place." },
    ],
    links: [{ rel: "canonical", href: "https://service-section.lovable.app/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "United Health",
        description: "Comprehensive primary care, family care, pediatrics, women's health, and vaccinations.",
        url: "https://service-section.lovable.app/",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-clip bg-background">
      <Services />
      <section aria-hidden="true" className="h-screen w-full bg-background" />
    </main>
  );
}
