import { profile } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { MagneticLink } from "./MagneticLink";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-10">
      <SectionHeading index="04" title="Contact" />

      <FadeIn>
        <p className="max-w-xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
          Open to new grad software and AI engineering roles. The fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm">
          <MagneticLink
            href={`mailto:${profile.links.email}`}
            className="text-accent underline decoration-accent/40 decoration-1 underline-offset-4 hover:decoration-accent"
          >
            {profile.links.email}
          </MagneticLink>
          <MagneticLink
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            GitHub
          </MagneticLink>
          <MagneticLink
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            LinkedIn
          </MagneticLink>
        </div>
      </FadeIn>

      <footer className="mt-24 flex flex-col gap-2 border-t border-hairline pt-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
