import { projects } from "@/lib/data";
import { ProjectSection } from "./ProjectSection";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-10">
      <SectionHeading index="01" title="Selected Work" />
      <div>
        {projects.map((project, i) => (
          <ProjectSection key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
