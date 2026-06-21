import { ArrowUpRight } from "lucide-react";

const navColumns = [
  ["Services", "About", "Doctors"],
  ["Insurance", "Contact"],
  ["Privacy Policy", "Social Media"],
];

export function Footer() {
  return (
    <footer className="bg-white p-3">
      <div className="flex flex-col gap-10 rounded-3xl bg-[#131313] p-10">
        {/* Top section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 lg:items-start">
          {/* Brand + newsletter */}
          <div className="flex flex-1 min-w-0 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <a href="#" className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-8 place-items-center rounded-full bg-white"
                >
                  <span className="size-3 rounded-full bg-brand-yellow" />
                </span>
                <span className="font-display text-2xl font-normal tracking-[-0.06em] text-white">
                  United Health
                </span>
              </a>
              <p className="max-w-[337px] text-base leading-6 tracking-[-0.02em] text-white">
                Comprehensive medical care for individuals and families — quality
                care, close to home.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-xl leading-7 tracking-[-0.02em] text-white">
                Subscribe our newsletter
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-fit items-center gap-4 rounded-[56px] bg-[#2f2f2f] py-1 pl-6 pr-1"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent text-base tracking-[-0.02em] text-white placeholder:text-white/70 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 overflow-hidden rounded-[32px] bg-[#fff077] py-1 pl-4 pr-1 transition-colors hover:brightness-95"
                >
                  <span className="px-1 font-mono text-sm uppercase leading-5 tracking-[0.12em] text-black">
                    Submit
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#191815]">
                    <ArrowUpRight className="size-5 text-[#fff077]" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex gap-4 sm:gap-8">
            {navColumns.map((col, idx) => (
              <ul key={idx} className="flex flex-col gap-2">
                {col.map((label) => (
                  <li key={label} className="p-3">
                    <a
                      href="#"
                      className="whitespace-nowrap text-base tracking-[-0.02em] text-white transition-colors hover:text-brand-yellow"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm leading-5 text-[#7c7c7c]">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <p>© {new Date().getFullYear()} United Health Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
