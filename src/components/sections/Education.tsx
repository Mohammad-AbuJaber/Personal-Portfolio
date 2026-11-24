import { degree, programs } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Tag, TagList } from "@/components/ui/Tag";

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education & programs" title="Learning that shaped me">
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:row-span-2">
          <p className="font-code text-[13px] text-meta">{degree.period}</p>
          <h3 className="font-display text-2xl font-semibold">{degree.title}</h3>
          <p className="text-muted">{degree.school}</p>
          <p className="text-[15px] text-ink-soft">{degree.summary}</p>
          <div className="mt-auto pt-3">
            <TagList tags={degree.tags} />
          </div>
        </article>

        {programs.map((program) => (
          <article key={program.title} className="flex flex-col gap-2.5 rounded-2xl border border-line p-6 sm:p-8">
            <p className="font-code text-[13px] text-meta">{program.period}</p>
            <h3 className="font-display text-xl font-semibold">{program.title}</h3>
            <p className="text-[15px] text-muted">{program.summary}</p>
            {program.badges && (
              <ul className="flex flex-wrap gap-2 pt-1.5" aria-label="Badges earned">
                {program.badges.map((badge) => (
                  <li key={badge}>
                    <Tag variant="pill" className="py-1.5 text-[13px]">
                      {badge}
                    </Tag>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
