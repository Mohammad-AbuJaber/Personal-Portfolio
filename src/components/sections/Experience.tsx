import { jobs, type Job } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/Tag";

export function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Where I’ve worked">
      <ol className="flex flex-col gap-4">
        {jobs.map((job) => (
          <li key={job.company}>
            <JobCard job={job} />
          </li>
        ))}
      </ol>
    </Section>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <article
      className={cn(
        "grid gap-5 rounded-2xl border border-line p-6 sm:p-8 md:grid-cols-[220px_1fr] md:gap-8 lg:p-9",
        job.current && "bg-surface",
      )}
    >
      <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-start">
        <p className="font-code text-[13px] text-ink-soft">{job.period}</p>
        <StatusBadge tone={job.current ? "accent" : "neutral"}>{job.badge}</StatusBadge>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold sm:text-2xl">{job.title}</h3>
          <p className="mt-1 text-muted">{job.company}</p>
        </div>
        <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] text-ink-soft marker:text-meta sm:text-base">
          {job.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <TagList tags={job.stack} />
      </div>
    </article>
  );
}
