// The first thing visitors see: name, a one-line intro, and selected work.
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { projects } from "../data/projects";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16 sm:px-10">
      <FadeIn>
        <p className="font-mono text-sm text-muted">{site.role}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink sm:text-7xl">{site.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{site.tagline}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Get in touch
          </Link>
        </div>
      </FadeIn>

      {/* selected work: a quiet list linking to each project page */}
      <FadeIn delay={0.1} className="mt-20">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">Selected work</p>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="group flex items-baseline justify-between gap-6 py-4">
                <span className="font-medium text-ink transition-colors group-hover:text-accent">{p.title}</span>
                <span className="hidden truncate text-sm text-muted sm:block">{p.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
