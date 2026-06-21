import { Sparkles, CalendarDays, BarChart3, User } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import { PillButton } from "./PillButton";

const features = [
  {
    icon: Sparkles,
    title: "Experienced Medical Team",
    body: "Board-certified physicians and healthcare professionals.",
  },
  {
    icon: CalendarDays,
    title: "Convenient Scheduling",
    body: "Same-day and next-day appointments available.",
  },
  {
    icon: BarChart3,
    title: "Modern Medical Care",
    body: "Advanced diagnostics and evidence-based treatment.",
  },
  {
    icon: User,
    title: "Patient-First Approach",
    body: "Personalized care focused on long-term wellness.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-[72px] lg:px-[52px]">
      <div className="mx-auto flex max-w-[1176px] flex-col items-center gap-16">
        <div className="mx-auto max-w-[752px] text-center">
          <SectionEyebrow>Why Choose Us</SectionEyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3rem)] font-medium leading-[1.16] tracking-[-0.06em]">
            Why Patients Choose Us
          </h2>
          <p className="mx-auto mt-5 max-w-[532px] text-base leading-6 tracking-[-0.02em] text-muted-foreground">
            Comprehensive medical care built around your needs, delivered by a team you can trust.
          </p>
          <div className="mt-5 flex justify-center">
            <PillButton variant="dark" withChip>
              Book Appointment
            </PillButton>
          </div>
        </div>

        <div className="w-full rounded-[24px] bg-[#f2f2f2] p-3">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="flex h-[300px] flex-col justify-between rounded-xl bg-white p-5 shadow-[0_3px_3px_rgba(0,0,0,0.06)]"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-brand-yellow text-foreground">
                  <Icon className="size-5" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.02em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
