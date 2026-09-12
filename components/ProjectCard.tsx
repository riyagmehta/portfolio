import type { Project } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { MagneticLink } from "./MagneticLink";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const order = String(index + 1).padStart(2, "0");

  return (
    <FadeIn
      as="div"
      delay={(index % 2) * 0.08}
      className="group flex h-full flex-col rounded-lg border border-hairline bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-surface-hover sm:p-8"
    >
      <p className="font-mono text-xs text-accent">{order}</p>
      <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {project.highlights.map((point, i) => (
          <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink/75">
            <span aria-hidden className="mt-[2px] shrink-0 text-accent">
              ›
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-sm border border-hairline px-2 py-0.5 font-mono text-[10px] text-ink/60"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-5 border-t border-hairline pt-5">
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
    </FadeIn>
  );
}
