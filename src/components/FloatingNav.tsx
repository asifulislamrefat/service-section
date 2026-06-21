import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Repeat, X, Stethoscope, Dumbbell, Sparkles, Home } from "lucide-react";

const pages = [
  { to: "/", label: "Medical", icon: Stethoscope },
  { to: "/fitness", label: "Fitness", icon: Dumbbell },
  { to: "/agency", label: "Agency", icon: Sparkles },
  { to: "/roofing", label: "Roofing", icon: Home },
] as const;

export function FloatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <nav
          className="animate-in fade-in slide-in-from-bottom-2 min-w-[200px] rounded-2xl border border-black/10 bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
          aria-label="Quick page navigation"
        >
          <div className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
            Jump to
          </div>
          <ul className="flex flex-col gap-0.5">
            {pages.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
                  activeProps={{ className: "bg-neutral-100 text-black" }}
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
        className="grid size-14 place-items-center rounded-full bg-black text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="size-6" /> : <Repeat className="size-6" />}
      </button>
    </div>
  );
}
