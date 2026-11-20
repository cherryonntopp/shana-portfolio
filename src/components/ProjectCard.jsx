// One clickable project card. Clicking it opens /projects/<slug>.
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition hover:border-ink/40 hover:shadow-md"
    >
      {/* screenshot of the actual project */}
      <div className="overflow-hidden border-b border-line bg-subtle">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.summary}</p>
        {project.badge && <p className="mt-3 text-xs font-medium text-accent">{project.badge}</p>}
        <p className="mt-auto pt-4 font-mono text-[11px] text-muted">{project.tech.slice(0, 3).join(" · ")}</p>
      </div>
    </Link>
  );
}
