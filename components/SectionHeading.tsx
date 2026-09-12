import { FadeIn } from "./FadeIn";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <FadeIn>
      <div className="mb-14 flex items-end justify-between gap-4 border-b border-hairline pb-5">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
        <span className="font-mono text-xs text-muted">{index} /</span>
      </div>
    </FadeIn>
  );
}
