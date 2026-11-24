import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-3 py-7 text-sm text-meta sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p className="font-code text-xs">Built with Next.js · TypeScript · Tailwind</p>
        <a href="#top" className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
