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
  heading: "Every workout. Every goal. One studio.",
  sub: "Strength, conditioning, and coaching built around how you actually want to move.",
  sectionClass: "bg-[#0f1410]",
  panelClass: "bg-[#172019]",
  copyClass: "bg-[#1f2a22]",
  cardClass: "bg-[#1f2a22]",
  textClass: "text-[#f3f7f2]",
  accent: "#7dffa1",
  accentStrong: "#22e07a",
  iconChipClass: "bg-[#7dffa1] text-black",
};

export const Route = createFileRoute("/fitness")({
  head: () => ({
    meta: [
      { title: "Services — Foundry Strength Co." },
      { name: "description", content: "Strength, HIIT, cycle, and 1:1 coaching in one premium studio." },
    ],
  }),
  component: () => (
    <main className="overflow-x-clip bg-[#0f1410]">
      <ServicesSection services={services} theme={theme} />
    </main>
  ),
});
