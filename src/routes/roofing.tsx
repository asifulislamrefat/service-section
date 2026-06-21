import { createFileRoute } from "@tanstack/react-router";
import { Home, Wrench, CloudRain, Hammer, ShieldCheck } from "lucide-react";
import { ServicesSection, type ServiceItem, type ServicesTheme } from "@/components/home/ServicesSection";
import roofingInstallation from "@/assets/roofing-installation.jpg";

const services: ServiceItem[] = [
  {
    icon: Home,
    title: "Roof Replacement",
    body: "Full tear-offs and new installs in asphalt, metal, and tile — built to last decades.",
    img: "https://images.unsplash.com/photo-1632759145773-d1f9d2c9f9e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Wrench,
    title: "Repairs & Patching",
    body: "Leak tracing, shingle repair, and flashing fixes — typically same-week service.",
    img: "https://images.unsplash.com/photo-1632759145355-8b8f3ab9c693?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: CloudRain,
    title: "Gutters & Drainage",
    body: "Seamless gutters, downspouts, and guards that move water away from your home.",
    img: "https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Hammer,
    title: "Storm Damage",
    body: "Emergency tarping, hail and wind assessments, and full insurance claim support.",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Inspections & Warranty",
    body: "Annual roof health reports and transferable workmanship warranties on every job.",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
  },
];

const theme: ServicesTheme = {
  eyebrow: "Our services",
  heading: "Honest roofing. Done right the first time.",
  sub: "Family-owned, fully insured, and backed by a 25-year workmanship warranty on every roof we install.",
  sectionClass: "bg-[#f6f1ea]",
  panelClass: "bg-[#ece3d4]",
  copyClass: "bg-[#fbf7f1]",
  cardClass: "bg-[#fbf7f1]",
  textClass: "text-[#1f1a14]",
  accent: "#ff7a3d",
  accentStrong: "#e35a14",
  iconChipClass: "bg-[#ff7a3d] text-white",
};

export const Route = createFileRoute("/roofing")({
  head: () => ({
    meta: [
      { title: "Services — Ridgeline Roofing Co." },
      { name: "description", content: "Roof replacement, repairs, gutters, and storm damage repair from a family-owned crew." },
    ],
  }),
  component: () => (
    <main className="overflow-x-clip bg-[#f6f1ea]">
      <ServicesSection services={services} theme={theme} />
    </main>
  ),
});
