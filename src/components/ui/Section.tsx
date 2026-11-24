import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, className, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className="scroll-mt-20 border-t border-line"
    >
      <Container className={cn("py-16 sm:py-20 lg:py-24", className)}>
        {title && (
          <header className="mb-10 flex flex-col gap-3 sm:mb-12">
            <Eyebrow>
              {index} / {eyebrow}
            </Eyebrow>
            <h2
              id={headingId}
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {title}
            </h2>
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-code text-[13px] text-accent">{children}</p>;
}
