// About section: short bio and skills as little tags.
import { site } from "../data/site";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <SectionHeading path="about" title="a little about me" />

      <div>
        <FadeIn className="max-w-2xl">
          {site.bio.map((line) => (
            <p key={line} className="mb-4 text-lg leading-relaxed text-ink/90">
              {line}
            </p>
          ))}

          <div className="mt-6 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <span key={skill} className="rounded-full bg-white/70 px-3 py-1 font-mono text-xs text-ink">
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
