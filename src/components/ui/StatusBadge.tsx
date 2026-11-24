import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  children: ReactNode;
  tone?: "accent" | "neutral" | "outline";
  className?: string;
};

const tones = {
  accent: "bg-accent-soft text-accent",
  neutral: "bg-surface-2 text-muted",
  outline: "border border-line-strong text-ink-soft",
};

export function StatusBadge({ children, tone = "accent", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 self-start rounded-full px-3 py-1 font-code text-xs",
        tones[tone],
        className,
      )}
    >
      {tone !== "neutral" && <span className="size-2 rounded-full bg-accent" aria-hidden="true" />}
      {children}
    </span>
  );
}
