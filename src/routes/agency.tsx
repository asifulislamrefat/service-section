import { createFileRoute } from "@tanstack/react-router";
import { Palette, Code2, Megaphone, LineChart, Sparkles } from "lucide-react";
import { ServicesSection, type ServiceItem, type ServicesTheme } from "@/components/home/ServicesSection";

const services: ServiceItem[] = [
  {
    icon: Palette,
    title: "UI / UX Design",
    body: "Product-grade interfaces, design systems, and prototypes that ship.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Code2,
    title: "Web Development",
    body: "Fast, accessible, SEO-ready websites built on modern stacks.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Megaphone,
    title: "Brand & Identity",
    body: "Logos, voice, and visual systems that make brands unmistakable.",
    img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: LineChart,
    title: "Growth Marketing",
    body: "Performance, SEO, and lifecycle campaigns that compound revenue.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sparkles,
    title: "Motion & 3D",
    body: "Scroll-driven storytelling, micro-interactions, and product reels.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
  },
];

const theme: ServicesTheme = {
  eyebrow: "What we do",
  heading: "Design, build, and grow — under one studio",
  sub: "A small agency that ships big work. Strategy, design, code, and marketing in one tight loop.",
  sectionClass: "bg-[#0b0b0f]",
  panelClass: "bg-[#15151c]",
  copyClass: "bg-[#1d1d27]",
  cardClass: "bg-[#1d1d27]",
  textClass: "text-white",
  accent: "#c8ff3e",
  accentStrong: "#a6e600",
  iconChipClass: "bg-[#c8ff3e] text-black",
};

export const Route = createFileRoute("/agency")({
  head: () => ({
    meta: [
      { title: "Services — Northbeam Studio" },
      { name: "description", content: "Design, development, brand, and growth marketing from a single studio." },
    ],
  }),
  component: () => (
    <main className="overflow-x-clip bg-[#0b0b0f]">
      <ServicesSection services={services} theme={theme} />
    </main>
  ),
});
