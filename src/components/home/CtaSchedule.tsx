import { ArrowUpRight } from "lucide-react";
import ctaTeamAsset from "@/assets/cta-team-figma.png.asset.json";

const ctaTeam = ctaTeamAsset.url;

export function CtaSchedule() {
  return (
    <section className="bg-white p-3">
      <div className="relative h-[487px] w-full overflow-hidden rounded-[24px] bg-[#d0e3f1]">
        {/* Decorative ellipse */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-7 top-[185px] h-[416px] w-[1214px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,transparent_60%)]"
        />

        {/* Image — transparent PNG, anchored bottom-right */}
        <img
          src={ctaTeam}
          alt="United Health medical team"
          className="pointer-events-none absolute bottom-0 right-6 hidden h-[459px] w-auto select-none object-contain object-bottom md:block"
        />


        {/* Text container */}
        <div className="absolute left-10 top-[155px] flex w-[654px] max-w-[calc(100%-80px)] flex-col gap-8">
          <div className="flex flex-col gap-4 text-black">
            <h2 className="font-display text-[48px] font-medium leading-[56px] tracking-[-0.06em]">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-base leading-6 tracking-[-0.02em]">
              Get expert medical care from a team that puts your health first.
            </p>
          </div>

          <div className="flex items-start justify-start gap-3">
            <button
              type="button"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-[32px] bg-[rgba(18,40,53,0.3)] px-5 shadow-[0_4px_14px_-6px_rgba(15,52,96,0.25)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(18,40,53,0.45)] hover:shadow-[0_18px_30px_-12px_rgba(15,52,96,0.4)] active:translate-y-0 active:scale-[0.98]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[110%] group-hover:opacity-100"
              />
              <span className="relative px-1 font-mono text-sm uppercase leading-5 tracking-[0.12em] text-white">
                Book Appointment
              </span>
            </button>

            <button
              type="button"
              className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-[32px] bg-[#191815] pl-4 pr-1 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_30px_-12px_rgba(0,0,0,0.55)] active:translate-y-0 active:scale-[0.98]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[110%] group-hover:opacity-100"
              />
              <span className="relative px-1 font-mono text-sm uppercase leading-5 tracking-[0.12em] text-[#fff077] transition-transform duration-300 group-hover:-translate-x-0.5">
                Call Now
              </span>
              <span className="relative grid size-10 place-items-center rounded-full bg-[#fff077] transition-transform duration-300 ease-out group-hover:rotate-[8deg] group-hover:scale-105">
                <ArrowUpRight className="size-5 text-black transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
