import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  variant?: "code" | "chip" | "pill";
  className?: string;
};

const variants = {
  code: "rounded-md bg-surface-2 px-2.5 py-1 font-code text-xs text-muted",
  chip: "rounded-lg border border-line-strong px-3 py-2 text-sm",
  pill: "rounded-full border border-line bg-surface-2 px-3.5 py-2 text-sm",
};

export function Tag({ children, variant = "code", className }: TagProps) {
  return <span className={cn("inline-flex items-center", variants[variant], className)}>{children}</span>;
}

export function TagList({ tags, variant }: { tags: string[]; variant?: TagProps["variant"] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag variant={variant}>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
