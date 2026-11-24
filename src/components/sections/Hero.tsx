import { profile, quickFacts } from "@/data/profile";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { CodeCard } from "@/components/CodeCard";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { IconLink } from "@/components/ui/IconLink";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="grid items-center gap-10 pt-12 pb-14 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-24 lg:pb-18">
        <div className="flex flex-col gap-6 sm:gap-7">
          <div className="flex flex-wrap items-center gap-3">
            {profile.openToWork && <StatusBadge tone="outline">Open to new opportunities</StatusBadge>}
            <span className="font-code text-xs text-meta">{profile.location}</span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-[2.4rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-[4.25rem]"
          >
            Frontend engineer building <span className="text-accent">reliable interfaces</span> for enterprise
            systems.
          </h1>

          <p className="max-w-xl text-base text-muted sm:text-lg">
            I’m {profile.firstName}, a {profile.role} at {profile.company}. I build React and TypeScript
            applications for large enterprise systems, with a focus on reusable components, responsive design and
            clean API integration.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="#projects" className="min-h-12">
              View my work
              <ArrowRightIcon size={16} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="min-h-12">
              Get in touch
            </ButtonLink>
            <div className="flex gap-1 sm:ml-1">
              <IconLink href={profile.socials.github} label="GitHub profile">
                <GitHubIcon />
              </IconLink>
              <IconLink href={profile.socials.linkedin} label="LinkedIn profile">
                <LinkedInIcon />
              </IconLink>
            </div>
          </div>
        </div>

        <CodeCard />
      </Container>

      <Container className="pb-16 sm:pb-20 lg:pb-24">
        <dl className="grid overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.value}
              className="flex flex-col gap-1.5 border-line p-6 not-last:border-b sm:p-7 sm:not-last:border-r sm:not-last:border-b-0"
            >
              <dt className="order-2 text-sm text-muted">{fact.label}</dt>
              <dd className="order-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
