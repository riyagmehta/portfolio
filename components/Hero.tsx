import Image from "next/image";
import { profile, withBasePath } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { MagneticLink } from "./MagneticLink";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-page px-6 pb-24 pt-32 sm:px-8 sm:pt-40 lg:px-10">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:w-[58%]">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{profile.location}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mt-6 font-serif text-balance text-[clamp(3rem,8vw,6.5rem)] leading-[0.94] tracking-[-0.01em] text-ink">
              {profile.name}
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.15em] text-accent">{profile.role}</p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <p className="mt-8 max-w-md font-mono text-xs leading-relaxed text-muted">{profile.status}</p>
          </FadeIn>
          <FadeIn delay={0.32}>
            <nav className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
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
              <MagneticLink
                href={`mailto:${profile.links.email}`}
                className="text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                {profile.links.email}
              </MagneticLink>
              <MagneticLink
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Resume (PDF)
              </MagneticLink>
            </nav>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="lg:w-[38%]">
          <div className="overflow-hidden rounded-lg border border-hairline">
            <Image
              src={withBasePath("/riya.jpg")}
              alt="Riya Mehta"
              width={640}
              height={640}
              priority
              className="h-auto w-full object-cover [filter:saturate(0.82)_sepia(0.08)]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
