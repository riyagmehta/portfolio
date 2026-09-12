import { FadeIn } from "./FadeIn";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <FadeIn>
      <div className="mb-12 flex items-baseline gap-4 border-b border-hairline pb-4">
        <span className="font-mono text-xs text-muted">{index}</span>
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">{title}</h2>
      </div>
    </FadeIn>
  );
}
