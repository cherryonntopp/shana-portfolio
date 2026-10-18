// One big clickable project card. Clicking it opens /projects/<slug>.
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TechTags from "./TechTags";

// soft gradients for the card's top tile; cards take turns using these
const tiles = [
  "from-[#ffd9e8] to-[#ffeef5]",
  "from-[#fde2d4] to-[#fff1ea]",
  "from-[#ead9ff] to-[#f6eeff]",
  "from-[#d8ecff] to-[#eef6ff]",
];

export default function ProjectCard({ project, index }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Link
        to={`/projects/${project.slug}`}
        className="group block h-full overflow-hidden rounded-3xl border border-rose/40 bg-white/70 shadow-[0_10px_40px_-20px_rgba(232,93,151,0.5)] transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(232,93,151,0.6)]"
      >
        {/* colorful top tile with the emoji */}
        <div className={`flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${tiles[index % tiles.length]}`}>
          <span className="text-6xl transition-transform duration-300 group-hover:scale-110 sm:text-7xl">
            {project.emoji}
          </span>
        </div>

        <div className="p-6 sm:p-7">
          {project.badge && <p className="mb-2 font-mono text-xs text-pink">✦ {project.badge}</p>}
          <h3 className="font-serif text-2xl text-ink">{project.title}</h3>
          <p className="mt-2 text-muted">{project.summary}</p>
          <TechTags tech={project.tech} className="mt-5" />
          <p className="mt-6 font-mono text-sm text-pink">
            view project <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
