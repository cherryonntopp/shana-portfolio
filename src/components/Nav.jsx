// Top navigation bar. Left: my name.
// Right: section links + icons. On small screens these fold into a menu.
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

// "/#about" etc. so the links work from project pages too
const sections = ["about", "projects", "contact"];

function IconLinks() {
  const iconClass = "text-muted transition-colors hover:text-pink";
  return (
    <>
      <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="github" className={iconClass}>
        <GithubIcon />
      </a>
      <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin" className={iconClass}>
        <LinkedinIcon />
      </a>
      <a href={`mailto:${site.links.email}`} aria-label="email" className={iconClass}>
        <MailIcon />
      </a>
    </>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false); // is the mobile menu open?

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="font-serif text-lg text-ink" onClick={() => setOpen(false)}>
          {site.name} <span className="text-pink">✿</span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-7 sm:flex">
          {sections.map((s) => (
            <Link key={s} to={`/#${s}`} className="text-[15px] font-medium text-ink transition-colors hover:text-pink">
              {s}
            </Link>
          ))}
          <div className="flex items-center gap-4 pl-1">
            <IconLinks />
          </div>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-sm text-muted sm:hidden"
          aria-expanded={open}
          aria-label="toggle menu"
        >
          {open ? "[close]" : "[menu]"}
        </button>
      </nav>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex flex-col gap-4 px-5 pb-6 sm:hidden"
          >
            {sections.map((s) => (
              <Link key={s} to={`/#${s}`} onClick={() => setOpen(false)} className="font-serif text-xl text-ink">
                {s}
              </Link>
            ))}
            <div className="flex gap-5 pt-1">
              <IconLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
