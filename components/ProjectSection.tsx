"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import type { Project } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { MagneticLink } from "./MagneticLink";

export function ProjectSection({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const order = String(index + 1).padStart(2, "0");

  return (
    <FadeIn as="div" className="border-b border-hairline py-14 first:pt-0 last:border-b-0">
      <div className="flex items-start gap-4">
        <span className="mt-1 shrink-0 font-mono text-xs text-muted">{order}</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-2xl text-ink sm:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-2xl text-ink/90">{project.thesis}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-hairline px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-5 font-mono text-xs text-accent">{project.metrics.join("  ·  ")}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {project.links.map((link) => (
              <MagneticLink
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                {link.label}
              </MagneticLink>
            ))}

            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setExpanded((v) => !v)}
              className="ml-auto font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              {expanded ? "Hide engineering notes" : "Engineering notes"}
              <span className="ml-2 inline-block transition-transform duration-300" style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}>
                →
              </span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={panelId}
                role="region"
                aria-label={`${project.title} engineering notes`}
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-8 space-y-5 border-t border-hairline pt-8">
                  {project.notes.map((note, i) => {
                    const [lead, ...restParts] = note.split(". ");
                    const rest = restParts.join(". ");
                    return (
                      <li key={i} className="max-w-2xl text-sm leading-relaxed text-ink/85">
                        {rest ? (
                          <>
                            <span className="font-medium text-ink">{lead}.</span> {rest}
                          </>
                        ) : (
                          note
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </FadeIn>
  );
}
