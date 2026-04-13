import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

// ─── Base props compartilhadas ────────────────────────────────────────────────

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

// ─── Variante como <button> ───────────────────────────────────────────────────

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

// ─── Variante como <a> ───────────────────────────────────────────────────────

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// ─── Estilos por variante ────────────────────────────────────────────────────

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] active:scale-[0.97]",
  outline:
    "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  ghost:
    "text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-[var(--color-card-bg)]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ease-out cursor-pointer select-none";

// ─── Componente ──────────────────────────────────────────────────────────────

export default function Button(props: ButtonProps) {
  const { variant = "primary", children, className } = props;
  const classes = cn(base, variantStyles[variant], className);

  if (props.as === "a") {
    const { as: _as, variant: _v, children: _c, className: _cl, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, children: _c, className: _cl, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
