// One clickable project card, styled like a little sticker.
// Clicking it opens /projects/<slug>.
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border-[1.5px] border-ink bg-white p-2.5 shadow-sticker transition hover:-translate-x-0.5 hover:-translate-y-1 hover:shadow-sticker-lg"
    >
      {/* screenshot of the actual project */}
      <div className="overflow-hidden rounded-xl border border-ink/80 bg-petal">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
        <h3 className="font-type text-xl leading-snug font-bold tracking-tight text-ink transition-colors group-hover:text-pink">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted">{project.summary}</p>
        {project.badge && <p className="mt-2 font-mono text-[11px] text-berry">✦ {project.badge}</p>}
        <p className="mt-auto pt-4 font-mono text-[11px] text-muted">{project.tech.slice(0, 3).join(" · ")}</p>
      </div>
    </Link>
  );
}
