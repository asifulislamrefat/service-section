import { createFileRoute } from "@tanstack/react-router";
import { Home, Wrench, CloudRain, Hammer, ShieldCheck } from "lucide-react";
import { ServicesSection, type ServiceItem, type ServicesTheme } from "@/components/home/ServicesSection";
import roofingInstallation from "@/assets/roofing-installation.jpg";
import roofingRepairs from "@/assets/roofing-repairs.jpg";
import roofingGutters from "@/assets/roofing-gutters.jpg";
import roofingStorm from "@/assets/roofing-storm.jpg";
import roofingInspection from "@/assets/roofing-inspection.jpg";

const services: ServiceItem[] = [
  {
    icon: Home,
    title: "Roof Replacement",
    body: "Full tear-offs and new installs in asphalt, metal, and tile — built to last decades.",
    img: roofingInstallation,
  },
  {
    icon: Wrench,
    title: "Repairs & Patching",
    body: "Leak tracing, shingle repair, and flashing fixes — typically same-week service.",
    img: roofingRepairs,
  },
  {
    icon: CloudRain,
    title: "Gutters & Drainage",
    body: "Seamless gutters, downspouts, and guards that move water away from your home.",
    img: roofingGutters,
  },
  {
    icon: Hammer,
    title: "Storm Damage",
    body: "Emergency tarping, hail and wind assessments, and full insurance claim support.",
    img: roofingStorm,
  },
  {
    icon: ShieldCheck,
    title: "Inspections & Warranty",
    body: "Annual roof health reports and transferable workmanship warranties on every job.",
    img: roofingInspection,
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
    <main className="overflow-x-clip bg-[#f6f1ea]" style={{ ["--service-step-icon-bg" as string]: "#ece3d4" } as React.CSSProperties}>
      <ServicesSection services={services} theme={theme} />
    </main>
  ),
});
