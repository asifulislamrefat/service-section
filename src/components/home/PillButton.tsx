import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "glass" | "outline";

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  withChip?: boolean;
  href?: string;
}

export function PillButton({
  variant = "dark",
  withChip = false,
  className,
  children,
  href,
  ...rest
}: PillButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[32px] font-mono text-[14px] uppercase leading-5 tracking-[0.12em] whitespace-nowrap transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const sizing = withChip
    ? "pl-4 pr-1 py-1"
    : "px-4 py-[14px]";
  const variants: Record<Variant, string> = {
    dark: "bg-[#191815] text-[#fff077] shadow-[0_4px_14px_-6px_rgba(0,0,0,0.4)] hover:bg-black hover:shadow-[0_18px_30px_-12px_rgba(0,0,0,0.55)]",
    glass:
      "bg-[rgba(18,40,53,0.3)] text-white backdrop-blur-md shadow-[0_4px_14px_-6px_rgba(15,52,96,0.25)] hover:bg-[rgba(18,40,53,0.45)] hover:shadow-[0_18px_30px_-12px_rgba(15,52,96,0.4)]",
    outline:
      "border border-foreground/15 bg-background text-foreground shadow-[0_2px_10px_-6px_rgba(0,0,0,0.15)] hover:bg-foreground/5 hover:border-foreground/25 hover:shadow-[0_14px_24px_-12px_rgba(0,0,0,0.25)]",
  };

  const content = (
    <>
      {/* sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[110%] group-hover:opacity-100"
      />
      <span className="relative px-1 whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-x-0.5">
        {children}
      </span>
      {withChip && (
        <span
          aria-hidden
          className="relative ml-1 inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff077] text-[#131313] transition-transform duration-300 ease-out group-hover:rotate-[8deg] group-hover:scale-105"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
        </span>
      )}
    </>
  );


  if (href) {
    return (
      <a href={href} className={cn(base, sizing, variants[variant], className)}>
        {content}
      </a>
    );
  }

  return (
    <button className={cn(base, sizing, variants[variant], className)} {...rest}>
      {content}
    </button>
  );
}
