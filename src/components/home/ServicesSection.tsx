import { useEffect, useRef, useState, type CSSProperties, type ComponentType } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

export type ServiceItem = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
  img: string;
};

export type ServicesTheme = {
  /** uppercase eyebrow label */
  eyebrow: string;
  heading: React.ReactNode;
  sub: React.ReactNode;
  /** outer section background (Tailwind class) */
  sectionClass: string;
  /** outer panel background (Tailwind class) — replaces bg-[#f2f2f2] */
  panelClass: string;
  /** left card background (Tailwind class) — replaces inner bg-white */
  copyClass: string;
  /** right cards background (Tailwind class) — replaces bg-white */
  cardClass: string;
  /** text color class applied to whole section */
  textClass?: string;
  /** override colors that drive the yellow indicator + active icon */
  accent: string;        // --brand-yellow
  accentStrong: string;  // --brand-yellow-strong
  /** tailwind bg for the small icon chip on the cards */
  iconChipClass: string;
  /** optional class applied to card heading (h3) */
  headingClass?: string;
  /** optional text/icon color class applied to the card CTA button */
  buttonTextClass?: string;
  /** optional class applied to the section eyebrow */
  eyebrowClass?: string;
};

export function ServicesSection({
  services,
  theme,
  id = "services",
}: {
  services: ServiceItem[];
  theme: ServicesTheme;
  id?: string;
}) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let frame = 0;
    const update = () => {
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
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const maxIndex = services.length - 1;
  const easeWithDwell = (p: number) => {
    if (maxIndex <= 0) return 0;
    const clamped = Math.min(1, Math.max(0, p));
    const scaled = clamped * maxIndex;
    const k = Math.min(maxIndex - 1, Math.floor(scaled));
    const t = scaled - k;
    const hold = 0.06875;
    const transition = 1 - hold;
    const half = hold / 2;
    let eased: number;
    if (t < half) eased = 0;
    else if (t > 1 - half) eased = 1;
    else {
      const x = (t - half) / transition;
      eased = x * x * (3 - 2 * x);
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
    const half = 0.06875 / 2;
    const nudge = idx === 0 ? half / maxIndex : idx === maxIndex ? -half / maxIndex : 0;
    const target = Math.min(1, Math.max(0, p + nudge));
    const stageTop = stage.getBoundingClientRect().top + window.scrollY;
    const targetY = stageTop - stickyTop + target * travel;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(targetY, { duration: 0.9 });
    else window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const themeVars: CSSProperties & Record<string, string | number> = {
    ["--service-count"]: services.length,
    ["--brand-yellow"]: theme.accent,
    ["--brand-yellow-strong"]: theme.accentStrong,
  };

  return (
    <section
      id={id}
      className={`${theme.sectionClass} ${theme.textClass ?? ""} px-6 py-[72px] lg:px-[52px]`}
    >
      <div className="mx-auto flex max-w-[1176px] flex-col items-center gap-16">
        <div className="mx-auto max-w-[640px] text-center">
          <SectionEyebrow className={theme.eyebrowClass}>{theme.eyebrow}</SectionEyebrow>
          <h1 className="mt-5 font-display text-[clamp(2rem,4.2vw,3rem)] font-medium leading-[1.16] tracking-[-0.06em]">
            {theme.heading}
          </h1>
          <p className="mx-auto mt-5 text-base leading-6 tracking-[-0.02em] opacity-70">
            {theme.sub}
          </p>
        </div>

        <div
          ref={stageRef}
          className="services-scroll-stage w-full max-w-[1040px]"
          style={themeVars}
        >
          <div className={`services-scroll-sticky grid gap-6 rounded-[24px] ${theme.panelClass} p-3 lg:grid-cols-[0.88fr_1.12fr] lg:p-4`}>
            <div className={`services-scroll-copy relative flex h-full flex-col rounded-2xl ${theme.copyClass} p-3 lg:p-4`}>
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
                    <span className="services-scroll-step__num">{String(idx + 1).padStart(2, "0")}</span>
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
                const translateY = itemProgress < 0 ? -itemProgress * 88 : -itemProgress * 64;
                const rotate = itemProgress * -4;
                const scale = Math.max(0.86, 1 - Math.abs(itemProgress) * 0.08);
                const fadeDistance = Math.max(0, distance - 0.18);
                const opacity = isVisible ? Math.max(0.08, 1 - fadeDistance * 0.9) : 0;
                return (
                  <article
                    key={title}
                    className={`services-scroll-card grid gap-5 rounded-xl ${theme.cardClass} p-5 shadow-[0_2px_1px_rgba(0,0,0,0.03),0_4px_1.5px_rgba(0,0,0,0.02)] md:grid-cols-2`}
                    style={{
                      transform: `translate3d(0, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`,
                      opacity,
                      zIndex: Math.round((services.length - distance) * 10),
                      pointerEvents: idx === activeIndex ? "auto" : "none",
                    }}
                  >
                    <div className="flex flex-col justify-center gap-6 px-4 pb-4">
                      <div className={`grid size-10 place-items-center rounded-xl ${theme.iconChipClass}`}>
                        <Icon className="size-5" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className={`font-display text-xl font-medium leading-tight tracking-[-0.02em] ${theme.headingClass ?? ""}`}>
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 opacity-70">{body}</p>
                      </div>
                      <a
                        href="#"
                        className={`inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium tracking-[-0.01em] transition-transform duration-200 hover:-translate-y-0.5 ${theme.buttonTextClass ?? "text-white"}`}
                        style={{ backgroundColor: theme.accentStrong }}
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
