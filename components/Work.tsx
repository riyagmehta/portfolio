import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-10">
      <SectionHeading index="02" title="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
