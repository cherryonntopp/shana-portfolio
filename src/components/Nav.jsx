// Top navigation bar. Left: my name.
// Right: page links + icons. On small screens these fold into a menu.
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const pages = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

// the page you're on is shown in full ink; the rest are muted
const linkClass = ({ isActive }) =>
  `font-medium transition-colors hover:text-ink ${isActive ? "text-ink" : "text-muted"}`;

function IconLinks({ className = "size-[18px]" }) {
  const iconClass = "text-muted transition-colors hover:text-ink";
  return (
    <>
      <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconClass}>
        <GithubIcon className={className} />
      </a>
      <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconClass}>
        <LinkedinIcon className={className} />
      </a>
      <a href={`mailto:${site.links.email}`} aria-label="Email" className={iconClass}>
        <MailIcon className={className} />
      </a>
    </>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false); // is the mobile menu open?

  return (
    <header className="relative z-50 border-b border-line">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link to="/" className="font-semibold tracking-tight text-ink" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-8 text-sm sm:flex">
          {pages.map((p) => (
            <NavLink key={p.to} to={p.to} className={linkClass}>
              {p.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 border-l border-line pl-6">
            <IconLinks />
          </div>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-medium text-ink sm:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* mobile dropdown, floats over the page so nothing shifts */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute right-4 left-4 mt-2 flex flex-col gap-4 rounded-lg border border-line bg-surface p-6 text-lg shadow-lg sm:hidden"
          >
            {pages.map((p) => (
              <NavLink key={p.to} to={p.to} onClick={() => setOpen(false)} className={linkClass}>
                {p.label}
              </NavLink>
            ))}
            <div className="flex gap-5 border-t border-line pt-4">
              <IconLinks className="size-5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
