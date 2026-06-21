import { useEffect, useRef, useState } from "react";
import { Activity, Users, Smile, Lightbulb, Syringe } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import generalImg from "@/assets/service-general.jpg";
import familyImg from "@/assets/service-family.jpg";
import pediatricsImg from "@/assets/service-pediatrics.jpg";
import womensImg from "@/assets/service-womens.jpg";
import vaccinationsImg from "@/assets/service-vaccinations.jpg";

const services = [
  {
    icon: Activity,
    title: "General Medicine",
    body: "Routine checkups, diagnosis, and treatment for everyday health concerns.",
    img: generalImg,
  },
  {
    icon: Users,
    title: "Family Care",
    body: "Coordinated healthcare for every member of your family, at every age.",
    img: familyImg,
  },
  {
    icon: Smile,
    title: "Pediatrics",
    body: "Compassionate care for infants, children, and adolescents.",
    img: pediatricsImg,
  },
  {
    icon: Lightbulb,
    title: "Women's Health",
    body: "Comprehensive women's health services and preventive screenings.",
    img: womensImg,
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    body: "Routine immunizations and seasonal vaccines for all ages.",
    img: vaccinationsImg,
  },
];

export function Services() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const rect = stage.getBoundingClientRect();
      const stickyTop = window.innerWidth >= 1024 ? 88 : 72;
      const stickyHeight = Math.min(
        window.innerWidth >= 1024 ? 610 : window.innerHeight - 96,
        window.innerHeight - stickyTop - 24,
      );
      const travel = rect.height - stickyHeight;
      const raw = travel > 0 ? (stickyTop - rect.top) / travel : 0;
      setScrollProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const maxIndex = services.length - 1;
  // Map raw progress to activeFloat with a longer "dwell" plateau on each card
  // so users can read each one at full opacity before it transitions.
  const easeWithDwell = (p: number) => {
    if (maxIndex <= 0) return 0;
    const clamped = Math.min(1, Math.max(0, p));
    const scaled = clamped * maxIndex; // 0..maxIndex
    const k = Math.min(maxIndex - 1, Math.floor(scaled));
    const t = scaled - k; // 0..1 within segment
    const hold = 0.06875; // ~6.9% of each segment is a read-pause
    const transition = 1 - hold;
    const half = hold / 2;
    let eased: number;
    if (t < half) eased = 0;
    else if (t > 1 - half) eased = 1;
    else {
      const x = (t - half) / transition;
      eased = x * x * (3 - 2 * x); // smoothstep
    }
    return k + eased;
  };
  const activeFloat = easeWithDwell(scrollProgress);
  const activeIndex = Math.min(maxIndex, Math.round(activeFloat));

  const scrollToIndex = (idx: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const stickyTop = window.innerWidth >= 1024 ? 88 : 72;
    const stickyHeight = Math.min(
      window.innerWidth >= 1024 ? 610 : window.innerHeight - 96,
      window.innerHeight - stickyTop - 24,
    );
    const travel = stage.offsetHeight - stickyHeight;
    const p = maxIndex > 0 ? idx / maxIndex : 0;
    // Nudge slightly into the plateau so the chosen card sits at full opacity.
    const half = 0.06875 / 2;
    const nudge = idx === 0 ? half / maxIndex : idx === maxIndex ? -half / maxIndex : 0;
    const target = Math.min(1, Math.max(0, p + nudge));
    const stageTop = stage.getBoundingClientRect().top + window.scrollY;
    const targetY = stageTop - stickyTop + target * travel;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 0.9 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-white px-6 py-[72px] lg:px-[52px]">
      <div className="mx-auto flex max-w-[1176px] flex-col items-center gap-16">
        <div className="mx-auto max-w-[532px] text-center">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3rem)] font-medium leading-[1.16] tracking-[-0.06em]">
            Comprehensive Care Under One Roof
          </h2>
          <p className="mx-auto mt-5 text-base leading-6 tracking-[-0.02em] text-muted-foreground">
            From everyday checkups to specialized care, everything your&nbsp;
            family needs in one place.
          </p>
        </div>

        <div
          ref={stageRef}
          className="services-scroll-stage w-full max-w-[1040px]"
          style={{ ["--service-count" as string]: services.length }}
        >
          <div className="services-scroll-sticky grid gap-6 rounded-[24px] bg-[#f2f2f2] p-3 lg:grid-cols-[0.88fr_1.12fr] lg:p-4">
            <div className="services-scroll-copy relative flex h-full flex-col rounded-2xl bg-white p-3 lg:p-4">
              <div className="relative flex h-full flex-col">
                <div
                  className="services-scroll-indicator"
                  aria-hidden="true"
                  style={{
                    transform: `translateY(${activeFloat * 100}%)`,
                    height: `${100 / services.length}%`,
                  }}
                />
                {services.map(({ icon: Icon, title }, idx) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Show ${title}`}
                    className={`services-scroll-step ${idx === activeIndex ? "is-active" : ""}`}
                  >
                    <span className="services-scroll-step__num">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="services-scroll-step__icon grid size-10 place-items-center rounded-xl">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <span className="services-scroll-step__title font-display text-lg font-medium leading-tight tracking-[-0.02em]">
                      {title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="services-scroll-deck">
          {services.map(({ icon: Icon, title, body, img }, idx) => {
            const itemProgress = activeFloat - idx;
            const distance = Math.abs(itemProgress);
            const isVisible = distance < 1.35;
            const translateY = itemProgress < 0 ? 88 + Math.abs(itemProgress) * 72 : -64 * itemProgress;
            const rotate = itemProgress * -4;
            const scale = Math.max(0.86, 1 - Math.abs(itemProgress) * 0.08);
            const fadeDistance = Math.max(0, distance - 0.18);
            const opacity = isVisible ? Math.max(0.08, 1 - fadeDistance * 0.9) : 0;
            return (
              <article
                key={title}
                className="services-scroll-card grid gap-5 rounded-xl bg-white p-5 shadow-[0_2px_1px_rgba(0,0,0,0.03),0_4px_1.5px_rgba(0,0,0,0.02)] md:grid-cols-2"
                style={{
                  transform: `translate3d(0, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`,
                  opacity,
                  zIndex: Math.round((services.length - distance) * 10),
                  pointerEvents: idx === activeIndex ? "auto" : "none",
                }}
              >
                <div className="flex flex-col justify-center gap-6 px-4 pb-4">
                  <div className="grid size-10 place-items-center rounded-xl bg-brand-yellow text-foreground">
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.02em]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {body}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex w-fit items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium tracking-[-0.01em] text-background transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={title}
                    width={720}
                    height={420}
                    loading="lazy"
                    className="services-stack__img aspect-[16/9] h-full w-full object-cover"
                  />
                </div>
              </article>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
