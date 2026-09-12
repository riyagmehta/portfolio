import { skills } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-10">
      <SectionHeading index="03" title="Skills" />

      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <FadeIn key={group.group}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{group.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-hairline px-2.5 py-1 font-mono text-[11px] text-ink/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
