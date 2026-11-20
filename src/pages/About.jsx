// About page: photo, short bio, and skills.
import { Link } from "react-router-dom";
import { site } from "../data/site";
import FadeIn from "../components/FadeIn";
import Page from "../components/Page";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <Page>
      <SectionHeading eyebrow="About" title="A bit about me" />

      <div className="grid items-start gap-10 md:grid-cols-[260px_1fr] md:gap-14">
        <FadeIn>
          <img
            src={site.avatar}
            alt={`Photo of ${site.name}`}
            className="aspect-[4/5] w-full max-w-[260px] rounded-lg border border-line object-cover"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="max-w-2xl">
          {site.bio.map((line) => (
            <p key={line} className="mb-4 text-lg leading-relaxed text-ink/85">
              {line}
            </p>
          ))}

          <p className="mt-8 text-xs font-medium tracking-widest text-muted uppercase">Skills</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li key={skill} className="rounded-md border border-line bg-surface px-3 py-1 text-sm text-ink">
                {skill}
              </li>
            ))}
          </ul>

          <Link to="/projects" className="group mt-10 inline-block text-sm font-medium text-accent">
            See my projects <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </FadeIn>
      </div>
    </Page>
  );
}
