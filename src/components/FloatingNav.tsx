import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Repeat, X, Stethoscope, Dumbbell, Sparkles, Home } from "lucide-react";

const pages = [
  { to: "/", label: "Medical", icon: Stethoscope },
  { to: "/fitness", label: "Fitness", icon: Dumbbell },
  { to: "/agency", label: "Agency", icon: Sparkles },
  { to: "/roofing", label: "Roofing", icon: Home },
] as const;

type Theme = {
  button: string;
  panel: string;
  eyebrow: string;
  item: string;
  itemActive: string;
};

const themes: Record<string, Theme> = {
  // Medical home — clean white + brand yellow
  "/": {
    button:
      "bg-foreground text-background shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] ring-2 ring-brand-yellow/60",
    panel: "border-black/10 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]",
    eyebrow: "text-neutral-500",
    item: "text-neutral-800 hover:bg-neutral-100",
    itemActive: "bg-brand-yellow/30 text-black",
  },
  // Agency — dark violet, glowing
  "/agency": {
    button:
      "bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] ring-1 ring-violet-300/40",
    panel:
      "border border-violet-500/30 bg-[#160d33]/95 backdrop-blur shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)]",
    eyebrow: "text-violet-300/80",
    item: "text-violet-100 hover:bg-violet-500/15",
    itemActive: "bg-violet-500/25 text-white",
  },
  // Fitness — neon green on near-black
  "/fitness": {
    button:
      "bg-[#c6ff3d] text-black shadow-[0_12px_30px_-6px_rgba(198,255,61,0.55)] ring-1 ring-[#c6ff3d]/50",
    panel:
      "border border-[#c6ff3d]/25 bg-[#11150f] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]",
    eyebrow: "text-[#c6ff3d]/80",
    item: "text-white/80 hover:bg-white/5",
    itemActive: "bg-[#c6ff3d]/15 text-[#c6ff3d]",
  },
  // Roofing — warm cream + orange
  "/roofing": {
    button:
      "bg-[#ff7a3d] text-white shadow-[0_12px_30px_-8px_rgba(227,90,20,0.55)] ring-1 ring-[#e35a14]/30",
    panel:
      "border border-[#e6d8c2] bg-[#fbf7f1] shadow-[0_20px_60px_-15px_rgba(31,26,20,0.18)]",
    eyebrow: "text-[#7a6a52]",
    item: "text-[#1f1a14] hover:bg-[#ece3d4]",
    itemActive: "bg-[#ff7a3d]/15 text-[#1f1a14]",
  },
};

export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const theme = themes[pathname] ?? themes["/"];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <nav
          className={`animate-in fade-in slide-in-from-bottom-2 min-w-[200px] rounded-2xl p-2 ${theme.panel}`}
          aria-label="Quick page navigation"
        >
          <div className={`px-3 py-2 text-xs font-medium uppercase tracking-wider ${theme.eyebrow}`}>
            Jump to
          </div>
          <ul className="flex flex-col gap-0.5">
            {pages.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${theme.item}`}
                  activeProps={{ className: theme.itemActive }}
                  activeOptions={{ exact: true }}
                >
                  <Icon className="size-4" strokeWidth={2} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close page menu" : "Open page menu"}
        className={`grid size-14 place-items-center rounded-full transition-transform hover:scale-105 active:scale-95 ${theme.button}`}
      >
        {open ? <X className="size-6" /> : <Repeat className="size-6" />}
      </button>
    </div>
  );
}
