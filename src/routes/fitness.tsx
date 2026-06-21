import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, Flame, HeartPulse, Bike, Salad } from "lucide-react";
import { ServicesSection, type ServiceItem, type ServicesTheme } from "@/components/home/ServicesSection";

const services: ServiceItem[] = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    body: "Programmed barbell and accessory work to build real, lasting strength.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Flame,
    title: "HIIT & Conditioning",
    body: "45-minute interval classes that torch calories and sharpen your engine.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: HeartPulse,
    title: "1:1 Coaching",
    body: "Private programming with a dedicated coach, weekly check-ins, and form review.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Bike,
    title: "Cycle Studio",
    body: "Beat-driven indoor cycling on premium bikes with real-time power metrics.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Salad,
    title: "Nutrition Coaching",
    body: "Habit-based nutrition plans that fit your life — no fad diets, ever.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
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
