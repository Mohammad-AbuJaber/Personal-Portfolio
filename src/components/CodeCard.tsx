import { Fragment } from "react";
import { profile } from "@/data/profile";

type Value = string | boolean | string[];

const engineer: Record<string, Value> = {
  name: profile.name,
  role: profile.role,
  focus: "Frontend · React",
  stack: ["React", "TypeScript", "Tailwind", "Vite"],
  cares: ["Reusable UI", "Performance", "Clean APIs"],
  degree: "B.Sc. Computer Systems Eng.",
  available: profile.openToWork,
};

function Str({ children }: { children: string }) {
  return <span className="text-accent">&apos;{children}&apos;</span>;
}

function renderValue(value: Value) {
  if (typeof value === "boolean") {
    return <span className="text-literal">{String(value)}</span>;
  }

  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((item, index) => (
          <Fragment key={item}>
            {index > 0 && ", "}
            <Str>{item}</Str>
          </Fragment>
        ))}
        ]
      </>
    );
  }

  return <Str>{value}</Str>;
}

export function CodeCard() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-code">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <figcaption className="font-code text-xs text-meta">mohammad.ts</figcaption>
        <span className="w-11" aria-hidden="true" />
      </div>

      <pre className="overflow-x-auto p-5 font-code text-[12.5px] leading-[1.85] text-ink-soft sm:p-6 sm:text-sm">
        <code>
          <span className="text-meta">{`// currently shipping at ${profile.company}`}</span>
          {"\n"}
          <span className="text-keyword">const</span> engineer = {"{"}
          {Object.entries(engineer).map(([key, value]) => (
            <Fragment key={key}>
              {"\n  "}
              {key}: {renderValue(value)},
            </Fragment>
          ))}
          {"\n};"}
        </code>
      </pre>
    </figure>
  );
}
