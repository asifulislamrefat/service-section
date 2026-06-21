import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PillButton } from "./PillButton";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const links: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  {
    label: "More Links",
    href: "#more",
    children: [
      { label: "Our Doctors", href: "#about" },
      { label: "Why Choose Us", href: "#why" },
      { label: "Patient Reviews", href: "#reviews" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1256px] items-center justify-between px-6 py-4 lg:px-9">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 text-foreground">
          <span
            aria-hidden
            className="grid size-[21px] place-items-center rounded-full border-[1.5px] border-foreground"
          >
            <span className="size-[7px] rounded-full border-[1.5px] border-foreground" />
          </span>
          <span className="font-display text-[20px] font-medium tracking-[-0.06em] leading-none">
            United Health
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const hasChildren = !!l.children?.length;
            const isOpen = menuOpen === l.label;
            if (!hasChildren) {
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className="eyebrow flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-foreground/85 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              );
            }
            return (
              <div
                key={l.label}
                ref={isOpen ? menuRef : undefined}
                className="relative"
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() => setMenuOpen(isOpen ? null : l.label)}
                  className="eyebrow flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-foreground/85 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {l.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  role="menu"
                  className={`absolute right-0 top-full mt-2 min-w-[220px] origin-top-right rounded-2xl border border-foreground/10 bg-background/95 p-2 shadow-[0_18px_40px_-12px_rgba(15,52,96,0.25)] backdrop-blur-md transition-all duration-200 ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-1 scale-95 opacity-0"
                  }`}
                >
                  {l.children!.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      role="menuitem"
                      onClick={() => setMenuOpen(null)}
                      className="eyebrow flex items-center justify-between rounded-xl px-4 py-2.5 text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                    >
                      {c.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <path
                          d="M3 9L9 3M9 3H4M9 3V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <PillButton variant="dark" className="h-10 px-4 text-[14px] !text-white">
            Book now
          </PillButton>
        </div>


        {/* Mobile */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded-full bg-foreground text-background lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-border bg-background p-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <div key={l.label} className="flex flex-col">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="eyebrow rounded-xl px-4 py-3 text-foreground/80 hover:bg-foreground/5"
                >
                  {l.label}
                </a>
                {l.children?.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className="eyebrow rounded-xl px-7 py-2 text-[12px] text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
          <PillButton variant="dark" className="mt-3 w-full">
            Book now
          </PillButton>
        </div>
      )}
    </header>
  );
}
