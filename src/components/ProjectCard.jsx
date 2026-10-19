// One big clickable project card. Clicking it opens /projects/<slug>.
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Link to={`/projects/${project.slug}`} className="group block rounded-3xl bg-white/80 p-3 ring-1 ring-petal">
        {/* screenshot of the actual project */}
        <div className="overflow-hidden rounded-2xl bg-petal">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="px-3 pt-5 pb-4">
          <h3 className="font-type text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-pink">{project.title}</h3>
          <p className="mt-1.5 text-muted">{project.summary}</p>
          {project.badge && <p className="mt-3 font-mono text-xs text-berry">{project.badge}</p>}
          <p className="mt-4 font-mono text-xs text-muted">{project.tech.join(" · ")}</p>
        </div>
      </Link>
    </motion.div>
  );
}
