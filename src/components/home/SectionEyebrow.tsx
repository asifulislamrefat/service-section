export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 text-foreground">
      <span aria-hidden className="inline-block size-1 rounded-full bg-foreground" />
      {children}
    </span>
  );
}
