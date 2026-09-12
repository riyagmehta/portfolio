import { education, experience } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-10">
      <SectionHeading index="01" title="Experience" />

      <div className="relative ml-1.5 space-y-14 border-l border-hairline pl-8 sm:pl-10">
        {experience.map((job) => {
          const isCurrent = job.dates.includes("Present");
          return (
            <FadeIn key={job.company} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full sm:-left-[49px] ${
                  isCurrent ? "bg-accent" : "border border-muted bg-canvas"
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-muted">{job.dates}</span>
                {isCurrent && (
                  <span className="rounded-sm border border-accent/30 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                    Current
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
                {job.role} <span className="text-muted">at {job.company}</span>
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="max-w-2xl text-[0.95rem] leading-relaxed text-ink/75">
                    {bullet}
                  </li>
                ))}
              </ul>
            </FadeIn>
          );
        })}
      </div>

      <div className="mt-20 border-t border-hairline pt-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
        <div className="mt-6 space-y-6">
          {education.map((entry) => (
            <FadeIn
              key={entry.school}
              className="grid grid-cols-1 gap-3 sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <div className="font-mono text-xs text-muted">{entry.dates}</div>
              <div>
                <h4 className="font-serif text-lg text-ink">{entry.school}</h4>
                <p className="mt-1 text-sm text-ink/85">
                  {entry.degree} <span className="font-mono text-xs text-accent">· {entry.detail}</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
