import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import testimonialImg from "@/assets/testimonial-1.jpg";
import doctorJulia from "@/assets/doctor-julia.jpg";
import doctorEmily from "@/assets/doctor-emily.jpg";

type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Caring, attentive, and always smiling — every visit feels like I'm seeing family rather than a clinic.",
    name: "Anna Marie Peterson",
    meta: "Patient since 2021",
    image: testimonialImg,
  },
  {
    quote:
      "The team listened carefully and explained every step. I finally feel in control of my health.",
    name: "Marcus Reed",
    meta: "Patient since 2022",
    image: doctorJulia,
  },
  {
    quote:
      "From check-in to follow-up, the experience was warm and professional. Highly recommended.",
    name: "Sofia Alvarez",
    meta: "Patient since 2020",
    image: doctorEmily,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = testimonials.length;
  const active = testimonials[index];

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  return (
    <section className="bg-white px-6 py-16 md:px-13 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1176px] flex-col items-center gap-12 md:gap-16">
        {/* Header */}
        <div className="flex w-full max-w-[752px] flex-col items-center gap-5 text-center">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium leading-[1.1] tracking-[-0.06em] text-black md:leading-[56px]">
            What they say about us?
          </h2>
          <p className="text-base leading-6 tracking-[-0.02em] text-[#585858]">
            Here's what they shared about their experience working with our team.
          </p>
        </div>

        {/* Slider card */}
        <div className="w-full overflow-hidden rounded-[24px] bg-[#f2f2f2] p-3 md:p-5">
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:gap-6">
            {/* Image — crossfade stack */}
            <div className="relative h-[280px] overflow-hidden rounded-[12px] md:h-[450px] md:flex-1">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt={t.name}
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Quote panel */}
            <div className="flex flex-col justify-between gap-8 rounded-[12px] bg-white p-6 shadow-[0_2px_1px_rgba(0,0,0,0.03),0_4px_3px_rgba(0,0,0,0.02)] md:flex-1">
              <div
                key={index}
                className="flex flex-col gap-8 md:gap-12"
                style={{
                  animation:
                    direction > 0
                      ? "slideInRight 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards"
                      : "slideInLeft 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
                }}
              >
                <span
                  aria-hidden
                  className="grid size-[76px] shrink-0 place-items-center rounded-lg bg-[#fff077]"
                >
                  <Quote className="size-10 -scale-x-100 fill-black text-black" />
                </span>
                <div className="flex flex-col gap-3">
                  <p className="font-display text-2xl font-medium leading-8 tracking-[-0.04em] text-black">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <div className="text-base leading-6 tracking-[-0.02em] text-black">
                    <p className="font-medium">{active.name}</p>
                    <p className="text-[#585858]">{active.meta}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1.5" aria-hidden>
                  {testimonials.map((_, j) => (
                    <button
                      key={j}
                      type="button"
                      onClick={() => goTo(j)}
                      className={`size-2 rounded-full transition-colors duration-500 ${
                        j === index ? "bg-black" : "bg-black/20"
                      }`}
                      aria-label={`Go to testimonial ${j + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="grid size-10 place-items-center rounded-[12px] bg-black text-white transition-colors hover:bg-[#fff077] hover:text-black"
                  >
                    <ArrowLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="grid size-10 place-items-center rounded-[12px] bg-black text-white transition-colors hover:bg-[#fff077] hover:text-black"
                  >
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

