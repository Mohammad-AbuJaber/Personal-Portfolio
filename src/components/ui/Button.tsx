import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2.5 rounded-[10px] text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary: "bg-accent px-5 py-3 font-semibold text-bg hover:bg-accent-strong",
  secondary: "border border-line-strong px-5 py-3 text-ink hover:border-muted hover:bg-surface-2",
  text: "font-semibold text-accent hover:text-accent-strong",
};

export function buttonStyles(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonLinkProps = ComponentProps<"a"> & { variant?: Variant };

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <a className={buttonStyles(variant, className)} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, className)} {...props} />;
}
