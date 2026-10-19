// Shared heading for each homepage section: a tiny terminal path ("~/about")
// above a big typewriter-style title.
import FadeIn from "./FadeIn";

export default function SectionHeading({ path, title }) {
  return (
    <FadeIn className="mb-10">
      <p className="font-mono text-sm text-berry">~/{path}</p>
      <h2 className="mt-2 font-type text-[2rem] font-bold tracking-tight text-ink sm:text-5xl">{title}</h2>
    </FadeIn>
  );
}
