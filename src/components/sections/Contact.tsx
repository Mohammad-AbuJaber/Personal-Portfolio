import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section id="contact" index="06" eyebrow="Contact" className="lg:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-6">
          <Eyebrow>06 / Contact</Eyebrow>
          <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            Let’s build something solid together.
          </h2>
          <p className="max-w-md text-base text-muted sm:text-[17px]">
            Hiring for a frontend role, or have a project in mind? I usually reply within a day.
          </p>

          <ul className="flex flex-col gap-1 pt-2">
            <ContactLink href={`mailto:${profile.email}`} icon={<MailIcon />}>
              <span className="break-all">{profile.email}</span>
            </ContactLink>
            <ContactLink href={profile.phoneHref} icon={<PhoneIcon />}>
              {profile.phone}
            </ContactLink>
            <ContactLink href={profile.socials.linkedin} icon={<LinkedInIcon />}>
              LinkedIn
            </ContactLink>
            <ContactLink href={profile.socials.github} icon={<GitHubIcon />}>
              GitHub
            </ContactLink>
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

function ContactLink({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
  const external = href.startsWith("http");

  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="flex min-h-11 items-center gap-3.5 py-2 text-base transition-colors hover:text-accent sm:text-[17px]"
      >
        <span className="shrink-0 text-muted">{icon}</span>
        {children}
      </a>
    </li>
  );
}
