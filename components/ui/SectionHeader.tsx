import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-[var(--color-primary)] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed text-[var(--color-text-muted)]",
            centered ? "max-w-xl" : "max-w-lg"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
