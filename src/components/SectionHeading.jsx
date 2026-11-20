// Shared heading for each page: a small uppercase label above a large title.
import FadeIn from "./FadeIn";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <FadeIn className="mb-10">
      <p className="text-xs font-medium tracking-widest text-muted uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
    </FadeIn>
  );
}
