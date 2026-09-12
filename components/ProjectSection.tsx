import type { Project } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { MagneticLink } from "./MagneticLink";

export function ProjectSection({ project, index }: { project: Project; index: number }) {
  const order = String(index + 1).padStart(2, "0");

  return (
    <FadeIn
      as="div"
      className="group relative border-b border-hairline py-16 first:pt-0 last:border-b-0 sm:py-20"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-0 select-none font-serif text-[8rem] leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-white/[0.05] sm:text-[11rem]"
      >
        {order}
      </span>

      <div className="relative grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <p className="font-mono text-xs text-accent">{order} / {project.tech[0]}</p>
          <h3 className="mt-3 max-w-xl font-serif text-3xl leading-[1.05] text-ink sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-ink/70">{project.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2">
            {project.links.map((link) => (
              <MagneticLink
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-ink transition-colors hover:text-accent"
              >
                {link.label}
                <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  ↗
                </span>
              </MagneticLink>
            ))}
          </div>
        </div>

        <div className="lg:pt-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Stack</p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start lg:gap-2.5">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-hairline px-2.5 py-1 font-mono text-[11px] text-ink/70 transition-colors group-hover:border-white/[0.14]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}
