import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import doctorCarl from "@/assets/doctor-carl.png.asset.json";
import doctorJulia from "@/assets/doctor-julia.png.asset.json";
import doctorEmily from "@/assets/doctor-emily.png.asset.json";
import doctorExtra1 from "@/assets/doctor-extra-1.jpg";
import doctorExtra2 from "@/assets/doctor-extra-2.jpg";

const doctors = [
  {
    name1: "Dr. Carl",
    name2: "Mitchell, MD",
    role: "Family Medicine",
    years: "15+ Years",
    img: doctorCarl.url,
  },
  {
    name1: "Dr. Julia",
    name2: "Rodriguez, MD",
    role: "Pediatrics",
    years: "12+ Years",
    img: doctorJulia.url,
  },
  {
    name1: "Dr. Emily",
    name2: "Chen, DO",
    role: "Internal Medicine",
    years: "18+ Years",
    img: doctorEmily.url,
  },
  {
    name1: "Dr. Marcus",
    name2: "Bennett, MD",
    role: "Cardiology",
    years: "20+ Years",
    img: doctorExtra1,
  },
  {
    name1: "Dr. Aisha",
    name2: "Patel, MD",
    role: "Dermatology",
    years: "10+ Years",
    img: doctorExtra2,
  },
];

export function MeetDoctors() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Clone first `perView` items at the end for seamless loop
  const loopItems = [...doctors, ...doctors.slice(0, perView)];

  const prev = () => {
    if (index === 0) {
      // Jump to clone-end without animation, then slide to last real item
      setAnimate(false);
      setIndex(doctors.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(doctors.length - 1);
        });
      });
    } else {
      setAnimate(true);
      setIndex((i) => i - 1);
    }
  };

  const next = () => {
    setAnimate(true);
    setIndex((i) => i + 1);
  };

  const handleTransitionEnd = () => {
    if (index >= doctors.length) {
      setAnimate(false);
      setIndex(0);
    }
  };

  return (
    <section id="about" className="bg-white px-6 py-16 sm:px-9 sm:py-[72px] lg:px-[52px]">
      <div className="mx-auto max-w-[1176px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-5">
              <SectionEyebrow>Our Doctors</SectionEyebrow>
              <h2 className="font-display font-medium text-black tracking-[-0.06em] text-[clamp(2rem,5vw,3rem)] leading-[1.1]">
                Meet Your Doctors
              </h2>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#131313] pl-4 pr-1 py-1 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_30px_-12px_rgba(0,0,0,0.55)] active:translate-y-0 active:scale-[0.98]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[110%] group-hover:opacity-100"
              />
              <span className="relative px-1 font-mono text-[14px] uppercase leading-5 tracking-[0.12em] text-[#fff077] transition-transform duration-300 group-hover:-translate-x-0.5">
                Book Appointment
              </span>
              <span className="relative grid size-10 place-items-center rounded-full bg-[#fff077] transition-transform duration-300 ease-out group-hover:rotate-[8deg] group-hover:scale-105">
                <ArrowUpRight className="size-5 text-[#131313] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous doctor"
              className="group grid size-10 place-items-center rounded-[12px] bg-[#f2f2f2] text-[#131313] transition-all duration-300 ease-out hover:bg-[#e8e8e8] hover:shadow-md active:scale-95"
            >
              <ArrowLeft className="size-6 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next doctor"
              className="group grid size-10 place-items-center rounded-[12px] bg-[#f2f2f2] text-[#131313] transition-all duration-300 ease-out hover:bg-[#e8e8e8] hover:shadow-md active:scale-95"
            >
              <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-16 overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex gap-3 ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
            style={{
              transform: `translateX(calc(${-index} * (100% + 12px) / ${perView}))`,
            }}
          >
            {loopItems.map((d, i) => (
              <article
                key={`${d.name1}-${i}`}
                className="flex shrink-0 flex-col gap-4 rounded-[20px] bg-[#f2f2f2] p-4"
                style={{ width: `calc((100% - ${(perView - 1) * 12}px) / ${perView})` }}
              >
                <div className="relative flex w-full flex-col gap-1 px-2">
                  <h3 className="min-h-[112px] w-full pr-[35px] font-display text-[48px] font-semibold leading-[56px] tracking-[-2.88px] text-black [word-break:break-word]">
                    {`${d.name1} ${d.name2}`}
                  </h3>
                  <p className="text-[14px] leading-5 tracking-[-0.56px] text-black whitespace-pre">
                    {`${d.role}  ·  ${d.years}`}
                  </p>
                  <a
                    href="#contact"
                    aria-label={`View ${d.name1} ${d.name2}`}
                    className="group absolute right-0 top-0 grid size-10 place-items-center overflow-hidden rounded-full bg-[#191815] text-white transition-all duration-300 ease-out hover:scale-110 hover:rotate-[8deg] hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)]"
                  >
                    <ArrowUpRight className="size-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                  </a>
                </div>

                <div className="h-[324px] w-full overflow-hidden rounded-[12px] bg-white">
                  <img
                    src={d.img}
                    alt={`${d.name1} ${d.name2}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
