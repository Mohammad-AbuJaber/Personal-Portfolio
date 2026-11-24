import Image from "next/image";
import portrait from "@/assets/personal-image.jpg";
import { focusAreas, profile } from "@/data/profile";
import { Eyebrow, Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-14">
        <div className="flex flex-col gap-5">
          <Eyebrow>01 / About</Eyebrow>
          <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-line bg-code md:max-w-[360px]">
            <Image
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 360px, 280px"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            I turn complex business requirements into interfaces people can actually use.
          </h2>
          <p className="text-base text-muted sm:text-[17px]">
            I studied Computer Systems Engineering at Birzeit University with a focus on Artificial Intelligence,
            then moved into frontend work, first as an intern at Foothill Technology Solutions and now full-time at
            Jaffal Group for Trade &amp; Investment.
          </p>
          <p className="text-base text-muted sm:text-[17px]">
            Day to day I build reusable React and Tailwind components, wire them to REST and SOAP services, and work
            closely with backend engineers in an Agile team. I care about performance, careful error handling and
            code the next person can maintain, and I’m the one you can count on when an urgent deployment lands.
          </p>
          <div className="pt-2">
            <TagList tags={focusAreas} variant="pill" />
          </div>
        </div>
      </div>
    </Section>
  );
}
