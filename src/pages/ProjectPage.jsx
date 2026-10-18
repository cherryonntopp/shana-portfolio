// A single project's page, at /projects/<slug>.
// It finds the matching project in data/projects.js and lays it out.
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import FadeIn from "../components/FadeIn";
import ProjectMedia from "../components/ProjectMedia";
import TechTags from "../components/TechTags";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams(); // the <slug> part of the url
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length]; // loops back to the first

  return (
    <article className="mx-auto max-w-4xl px-5 pt-10 pb-20 sm:px-8">
      <Link to="/#projects" className="font-mono text-sm text-muted transition-colors hover:text-pink">
        ← cd ..
      </Link>

      {/* title */}
      <FadeIn className="mt-10">
        <p className="font-mono text-sm text-berry">~/projects/{project.slug}</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          {project.title}
        </h1>
        {project.badge && <p className="mt-4 font-mono text-sm text-berry">✦ {project.badge}</p>}
      </FadeIn>

      {/* demo */}
      <FadeIn delay={0.1} className="mt-10">
        <ProjectMedia demo={project.demo} title={project.title} />
      </FadeIn>

      {/* details */}
      <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]">
        <FadeIn>
          <h2 className="font-serif text-2xl text-ink">what it is</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/90">{project.description}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-2xl text-ink">tech stack</h2>
          <TechTags tech={project.tech} className="mt-4" />
        </FadeIn>
      </div>

      {/* links */}
      <FadeIn className="mt-12 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-pink px-5 py-2.5 font-mono text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#d94c87]"
          >
            {link.label} ↗
          </a>
        ))}
      </FadeIn>

      {/* next project */}
      <div className="mt-20 border-t border-petal pt-8 text-right">
        <Link to={`/projects/${next.slug}`} className="group font-serif text-xl text-ink hover:text-pink">
          <span className="block font-mono text-xs text-muted">next project</span>
          {next.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
