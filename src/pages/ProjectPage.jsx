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
    <article className="mx-auto w-full max-w-4xl px-6 pt-10 pb-20 sm:px-10">
      <Link to="/projects" className="text-sm text-muted transition-colors hover:text-ink">
        ← All projects
      </Link>

      {/* title */}
      <FadeIn className="mt-10">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">Project</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{project.title}</h1>
        {project.badge && <p className="mt-4 text-sm font-medium text-accent">{project.badge}</p>}
      </FadeIn>

      {/* demo */}
      <FadeIn delay={0.1} className="mt-10">
        <ProjectMedia demo={project.demo} title={project.title} />
      </FadeIn>

      {/* details */}
      <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]">
        <FadeIn>
          <h2 className="text-xs font-medium tracking-widest text-muted uppercase">Overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">{project.description}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-xs font-medium tracking-widest text-muted uppercase">Tech stack</h2>
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
            className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            {link.label} ↗
          </a>
        ))}
      </FadeIn>

      {/* next project */}
      <div className="mt-20 border-t border-line pt-8 text-right">
        <Link to={`/projects/${next.slug}`} className="group text-xl font-semibold tracking-tight text-ink hover:text-accent">
          <span className="block text-xs font-medium tracking-widest text-muted uppercase">Next project</span>
          {next.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
