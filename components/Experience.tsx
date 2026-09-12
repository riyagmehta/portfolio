import { education, experience } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-10">
      <SectionHeading index="02" title="Experience" />

      <div className="space-y-12">
        {experience.map((job) => (
          <FadeIn key={job.company} className="grid grid-cols-1 gap-3 sm:grid-cols-[160px_1fr] sm:gap-8">
            <div className="font-mono text-xs text-muted">{job.dates}</div>
            <div>
              <h3 className="font-serif text-xl text-ink sm:text-2xl">
                {job.role} <span className="text-muted">— {job.company}</span>
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="max-w-2xl text-sm leading-relaxed text-ink/85">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-16 border-t border-hairline pt-12">
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
