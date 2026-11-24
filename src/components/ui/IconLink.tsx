import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconLinkProps = {
  href: string;
  label: string;
  variant?: "ghost" | "outline";
  children: ReactNode;
};

export function IconLink({ href, label, variant = "ghost", children }: IconLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "flex items-center justify-center transition-colors hover:text-ink",
        variant === "ghost" && "size-11 rounded-[10px] text-muted hover:bg-surface-2",
        variant === "outline" && "size-12 rounded-xl border border-line-strong text-ink-soft",
      )}
    >
      {children}
    </a>
  );
}
