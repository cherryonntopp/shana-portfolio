// About page: short bio and skills as little tags.
import { Link } from "react-router-dom";
import { site } from "../data/site";
import FadeIn from "../components/FadeIn";
import Page from "../components/Page";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <Page>
      <SectionHeading path="about" title="a little about me" />

      <FadeIn className="max-w-2xl">
        {site.bio.map((line) => (
          <p key={line} className="mb-4 text-lg leading-relaxed text-ink/90">
            {line}
          </p>
        ))}

        <div className="mt-6 flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-ink/70 bg-white px-3 py-1 font-mono text-xs text-ink">
              {skill}
            </span>
          ))}
        </div>

        <Link to="/projects" className="group mt-10 inline-block font-mono text-sm text-berry hover:text-pink">
          see what i’ve made <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </FadeIn>
    </Page>
  );
}
