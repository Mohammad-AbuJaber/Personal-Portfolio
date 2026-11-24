import Image from "next/image";
import { featuredProject } from "@/data/projects";
import { profile } from "@/data/profile";
import { ArrowRightIcon, GitHubIcon, LockIcon } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/Tag";

export function Projects() {
  const project = featuredProject;

  return (
    <Section id="projects" index="03" eyebrow="Selected work" title="What I’m building">
      <div className="flex flex-col gap-4">
        <article className="grid overflow-hidden rounded-[20px] border border-line bg-surface lg:grid-cols-2">
          <div className="relative min-h-60 sm:min-h-80 lg:min-h-96">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            {project.confidential && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-bg/80 px-4 py-2.5 font-code text-[13px]">
                  <LockIcon size={16} />
                  Confidential preview
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 sm:p-10">
            <StatusBadge>{project.status}</StatusBadge>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-[2rem] sm:leading-tight">
              {project.title}
            </h3>
            <p className="text-muted">{project.description}</p>
            <TagList tags={project.tags} />
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 self-start font-semibold text-accent transition-colors hover:text-accent-strong"
            >
              Ask me about it
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </article>

        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-5 rounded-2xl border border-dashed border-line-strong p-6 transition-colors hover:border-muted sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <span className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-ink-soft">
              <GitHubIcon size={22} />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-display text-xl font-semibold">More code on GitHub</span>
              <span className="text-sm text-muted">Experiments, side projects and what I’m learning next.</span>
            </span>
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-accent group-hover:text-accent-strong">
            Visit profile
            <ArrowRightIcon size={16} />
          </span>
        </a>
      </div>
    </Section>
  );
}
