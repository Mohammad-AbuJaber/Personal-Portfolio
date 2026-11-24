"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { withBasePath } from "@/lib/utils";
import { CloseIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MenuIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { IconLink } from "@/components/ui/IconLink";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <a href="#top" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-[10px] border border-line-strong font-code text-sm font-medium text-accent md:size-10">
            {profile.initials}
          </span>
          <span className="font-display text-base font-semibold tracking-tight md:text-[17px]">
            <span className="sm:hidden">{profile.firstName}</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2.5 text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href={withBasePath(profile.cvPath)}
            download
            variant="secondary"
            className="ml-2 px-4 py-2.5 text-sm"
          >
            <DownloadIcon size={16} />
            Download CV
          </ButtonLink>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-[10px] border border-line-strong md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-bg md:hidden"
      >
        <Container className="flex min-h-full flex-col pt-4 pb-8">
          <nav aria-label="Mobile">
            <ol>
              {navLinks.map((link, index) => (
                <li key={link.href} className="border-b border-line">
                  <a href={link.href} onClick={closeMenu} className="flex items-baseline gap-4 py-4">
                    <span className="font-code text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl font-semibold tracking-tight">{link.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <ButtonLink href={withBasePath(profile.cvPath)} download className="min-h-[52px] text-base">
              <DownloadIcon size={18} />
              Download CV
            </ButtonLink>
            <div className="flex justify-center gap-2">
              <IconLink href={profile.socials.github} label="GitHub profile" variant="outline">
                <GitHubIcon />
              </IconLink>
              <IconLink href={profile.socials.linkedin} label="LinkedIn profile" variant="outline">
                <LinkedInIcon />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Send an email" variant="outline">
                <MailIcon />
              </IconLink>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
