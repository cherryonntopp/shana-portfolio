// About section: avatar, short bio, and skills as little tags.
import { site } from "../data/site";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <SectionHeading path="about" title="a little about me" />

      <div className="flex flex-col items-start gap-10 sm:flex-row">
        <FadeIn className="shrink-0">
          <img
            src={site.avatar}
            alt="avatar"
            className="size-32 rounded-full border-4 border-white object-cover ring-1 ring-lavender sm:size-40"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="max-w-xl">
          {site.bio.map((line) => (
            <p key={line} className="mb-4 text-lg leading-relaxed text-ink/90">
              {line}
            </p>
          ))}

          <div className="mt-6 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <span key={skill} className="rounded-full bg-lavender px-3 py-1 font-mono text-xs text-ink">
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
