import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, Flame, HeartPulse, Bike, Salad } from "lucide-react";
import { ServicesSection, type ServiceItem, type ServicesTheme } from "@/components/home/ServicesSection";

import strengthImg from "@/assets/fitness-strength.jpg";
import hiitImg from "@/assets/fitness-hiit.jpg";
import coachingImg from "@/assets/fitness-coaching.jpg";
import cycleImg from "@/assets/fitness-cycle.jpg";
import nutritionImg from "@/assets/fitness-nutrition.jpg";

const services: ServiceItem[] = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    body: "Programmed barbell and accessory work to build real, lasting strength.",
    img: strengthImg,
  },
  {
    icon: Flame,
    title: "HIIT & Conditioning",
    body: "45-minute interval classes that torch calories and sharpen your engine.",
    img: hiitImg,
  },
  {
    icon: HeartPulse,
    title: "1:1 Coaching",
    body: "Private programming with a dedicated coach, weekly check-ins, and form review.",
    img: coachingImg,
  },
  {
    icon: Bike,
    title: "Cycle Studio",
    body: "Beat-driven indoor cycling on premium bikes with real-time power metrics.",
    img: cycleImg,
  },
  {
    icon: Salad,
    title: "Nutrition Coaching",
    body: "Habit-based nutrition plans that fit your life — no fad diets, ever.",
    img: nutritionImg,
  },
];

const theme: ServicesTheme = {
  eyebrow: "Train with us",
  heading: <span className="text-white">Every workout. Every goal. One studio.</span>,
  sub: <span className="text-white/60">Strength, conditioning, and coaching built around how you actually want to move.</span>,
  sectionClass: "bg-[#0a0d0a]",
  panelClass: "bg-[#11150f]",
  copyClass: "bg-[#161b14]",
  cardClass: "bg-[#161b14]",
  textClass: "text-white",
  accent: "#c6ff3d",
  accentStrong: "#b6f000",
  iconChipClass: "bg-[#c6ff3d] text-black",
};

export const Route = createFileRoute("/fitness")({
  head: () => ({
    meta: [
      { title: "Services — Foundry Strength Co." },
      { name: "description", content: "Strength, HIIT, cycle, and 1:1 coaching in one premium studio." },
    ],
  }),
  component: () => (
    <main className="overflow-x-clip bg-[#0a0d0a]" style={{ ["--service-step-icon-bg" as string]: "rgb(198 255 61 / 0.1)" } as React.CSSProperties}>
      <ServicesSection services={services} theme={theme} />
    </main>
  ),
});
