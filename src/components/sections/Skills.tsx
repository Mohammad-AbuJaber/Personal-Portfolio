import { skillGroups, type SkillGroup } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export function Skills() {
  return (
    <Section id="skills" index="04" eyebrow="Skills" title="My toolbox, honestly rated">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <LevelMeter level={group.level} />
            </div>
            <TagList tags={group.items} variant="chip" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function LevelMeter({ level }: { level: SkillGroup["level"] }) {
  return (
    <span className="flex gap-1" role="img" aria-label={`Level ${level} of 3`}>
      {[1, 2, 3].map((step) => (
        <span key={step} className={cn("h-1.5 w-[18px] rounded-full", step <= level ? "bg-accent" : "bg-line-strong")} />
      ))}
    </span>
  );
}
