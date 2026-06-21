import { createFileRoute } from "@tanstack/react-router";
import { Palette, Code2, Megaphone, LineChart, Sparkles } from "lucide-react";
import { ServicesSection, type ServiceItem, type ServicesTheme } from "@/components/home/ServicesSection";
import uiuxImg from "@/assets/agency-uiux.jpg";
import webdevImg from "@/assets/agency-webdev.jpg";
import brandImg from "@/assets/agency-brand.jpg";

const services: ServiceItem[] = [
  {
    icon: Palette,
    title: "UI / UX Design",
    body: "Product-grade interfaces, design systems, and prototypes that ship.",
    img: uiuxImg,
  },
  {
    icon: Code2,
    title: "Web Development",
    body: "Fast, accessible, SEO-ready websites built on modern stacks.",
    img: webdevImg,
  },
  {
    icon: Megaphone,
    title: "Brand & Identity",
    body: "Logos, voice, and visual systems that make brands unmistakable.",
    img: brandImg,
  },
  {
    icon: LineChart,
    title: "Growth Marketing",
    body: "Performance, SEO, and lifecycle campaigns that compound revenue.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sparkles,
    title: "Motion & 3D",
    body: "Scroll-driven storytelling, micro-interactions, and product reels.",
    img: "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?auto=format&fit=crop&w=1200&q=80",
  },
];

const theme: ServicesTheme = {
  eyebrow: "What we do",
  heading: (
    <span className="text-white">
      <span className="font-serif italic font-normal">Design</span>, build, and{" "}
      <span className="font-serif italic font-normal whitespace-pre-wrap">{"\n"}grow</span> — under one studio
    </span>
  ),
  sub: (
    <span className="whitespace-pre-wrap">
      A small agency that ships big work. Strategy, design, code and&nbsp;{"\n"}marketing in one tight loop.
    </span>
  ),
  sectionClass: "bg-[#0a0618]",
  panelClass: "bg-[#120a2a] ring-1 ring-inset ring-violet-500/20",
  copyClass: "bg-[#160d33]/80 ring-1 ring-inset ring-violet-500/25",
  cardClass: "bg-gradient-to-br from-[#1a0f3d] to-[#0f0828] ring-1 ring-inset ring-violet-500/30 shadow-[0_0_60px_-15px_rgba(124,58,237,0.35)]",
  textClass: "text-white",
  accent: "#a78bfa",
  accentStrong: "#7c3aed",
  iconChipClass: "bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]",
  headingClass: "text-white",
  buttonTextClass: "text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.7)]",
  eyebrowClass: "text-violet-300",
};

export const Route = createFileRoute("/agency")({
  head: () => ({
    meta: [
      { title: "Services — Northbeam Studio" },
      { name: "description", content: "Design, development, brand, and growth marketing from a single studio." },
    ],
  }),
  component: () => (
    <main
      className="overflow-x-clip bg-[#0a0618]"
      style={{ ["--service-step-icon-bg" as never]: "rgba(255,255,255,0.1)" }}
    >
      <ServicesSection services={services} theme={theme} />
      <section aria-hidden="true" className="h-screen w-full bg-[#0a0618]" />
    </main>
  ),
});
