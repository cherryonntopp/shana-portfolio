// Top navigation bar. Left: my name.
// Right: page links + icons. On small screens these fold into a menu.
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const pages = ["about", "projects", "contact"];

// the page you're on gets a pink squiggly underline
const linkClass = ({ isActive }) =>
  `font-type font-bold tracking-tight transition-colors hover:text-pink ${
    isActive ? "text-pink underline decoration-rose decoration-wavy decoration-2 underline-offset-8" : "text-ink"
  }`;

function IconLinks({ className = "size-5 lg:size-6" }) {
  const iconClass = "text-ink transition-colors hover:text-pink";
  return (
    <>
      <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="github" className={iconClass}>
        <GithubIcon className={className} />
      </a>
      <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin" className={iconClass}>
        <LinkedinIcon className={className} />
      </a>
      <a href={`mailto:${site.links.email}`} aria-label="email" className={iconClass}>
        <MailIcon className={className} />
      </a>
    </>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false); // is the mobile menu open?

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-6 pt-7 pb-4 sm:px-10 lg:px-14">
        <Link to="/" className="font-serif text-xl text-ink sm:text-2xl lg:text-[28px]" onClick={() => setOpen(false)}>
          {site.name} <span className="text-pink">✿</span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-6 text-xl sm:flex lg:gap-9 lg:text-[26px]">
          {pages.map((p) => (
            <NavLink key={p} to={`/${p}`} className={linkClass}>
              {p}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 pl-2 lg:gap-5">
            <IconLinks />
          </div>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-sm text-ink sm:hidden"
          aria-expanded={open}
          aria-label="toggle menu"
        >
          {open ? "[close]" : "[menu]"}
        </button>
      </nav>

      {/* mobile dropdown, floats over the page so nothing shifts */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute right-5 left-5 flex flex-col gap-4 rounded-2xl border-[1.5px] border-ink bg-white p-6 text-2xl shadow-sticker sm:hidden"
          >
            {pages.map((p) => (
              <NavLink key={p} to={`/${p}`} onClick={() => setOpen(false)} className={linkClass}>
                {p}
              </NavLink>
            ))}
            <div className="flex gap-5 pt-1">
              <IconLinks className="size-6" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
