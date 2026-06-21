import { Star } from "lucide-react";
import { Navbar } from "./Navbar";
import { PillButton } from "./PillButton";
import doctorCarl from "@/assets/doctor-carl.jpg";
import doctorJulia from "@/assets/doctor-julia.jpg";
import doctorEmily from "@/assets/doctor-emily.jpg";
import doctorExtra1 from "@/assets/doctor-extra-1.jpg";
import doctorExtra2 from "@/assets/doctor-extra-2.jpg";

const doctorImages = [
  doctorCarl,
  doctorJulia,
  doctorEmily,
  doctorExtra1,
  doctorExtra2,
  doctorCarl,
  doctorJulia,
  doctorEmily,
  doctorExtra1,
  doctorExtra2,
  doctorCarl,
  doctorJulia,
  doctorEmily,
  doctorExtra1,
  doctorExtra2,
  doctorCarl,
  doctorJulia,
  doctorEmily,
  doctorExtra1,
  doctorExtra2,
];

function OrbitGroup({ variant }: { variant: "first" | "second" | "third" }) {
  return (
    <div className={`hero-3d__group hero-3d__group--${variant}`}>
      {doctorImages.map((src, i) => (
        <div key={i} className={`hero-3d__slot is-${i}`}>
          <img src={src} alt="" aria-hidden className="hero-3d__card" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative px-3 pt-3">
      <div className="hero-gradient relative overflow-hidden rounded-[24px] min-h-[760px] pt-20 pb-28 sm:min-h-[820px] sm:pt-24 sm:pb-32">
        <Navbar />

        {/* Headline */}
        <div className="relative z-10 mx-auto max-w-[880px] px-6 text-center">
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-foreground">
            Healthcare You Can Trust,
            <br className="hidden sm:block" /> Close to Home
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 tracking-[-0.01em] text-foreground/70">
            Providing comprehensive medical care for individuals and families
            with experienced doctors, modern facilities, and convenient
            scheduling.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PillButton variant="glass">Book Appointment</PillButton>
            <PillButton variant="dark" withChip>
              Call Now
            </PillButton>
          </div>
        </div>

        {/* 3D Orbit Carousel */}
        <div aria-hidden className="hero-3d__floating">
          <div className="hero-3d">
            <div className="hero-3d__wrap">
              <OrbitGroup variant="first" />
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2">
          <p className="text-sm tracking-[-0.01em] text-primary-foreground">
            4.8/5 — 1,350 Patient Reviews
          </p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-brand-yellow text-brand-yellow" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
