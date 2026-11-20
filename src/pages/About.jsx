// About page: my photo, a short bio, and skills as little tags.
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { site } from "../data/site";
import FadeIn from "../components/FadeIn";
import Page from "../components/Page";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <Page>
      <SectionHeading path="about" title="a little about me" />

      <FadeIn className="flex max-w-3xl flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        {/* photo sticker, held on with a strip of washi tape */}
        <motion.div
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ rotate: -4, scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 14 }}
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="relative mt-2 shrink-0 self-start"
        >
          <span className="absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-6 bg-rose/70 sm:w-20" />
          <img
            src={site.avatar}
            alt={`photo of ${site.name}`}
            className="size-24 rounded-md border-[6px] border-white object-cover shadow-sticker ring-[1.5px] ring-ink sm:size-36"
          />
        </motion.div>

        <div className="max-w-2xl">
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
        </div>
      </FadeIn>
    </Page>
  );
}
