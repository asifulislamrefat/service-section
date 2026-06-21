export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${className ?? "text-foreground"}`}>
      <span aria-hidden className="inline-block size-1 rounded-full bg-current" />
      {children}
    </span>
  );
}
