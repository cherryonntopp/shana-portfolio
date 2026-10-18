// Shared heading for each homepage section: a tiny terminal path ("~/about")
// above a lowercase serif title.
import FadeIn from "./FadeIn";

export default function SectionHeading({ path, title }) {
  return (
    <FadeIn className="mb-10">
      <p className="font-mono text-sm text-berry">~/{path}</p>
      <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
    </FadeIn>
  );
}
