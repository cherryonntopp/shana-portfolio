// The first thing visitors see: a cute terminal window that "types" a few
// commands about me, with my photo stuck on the corner like a sticker.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { projects } from "../data/projects";

// Each step is a command that gets typed out, then its output appears.
const script = [
  {
    cmd: "whoami",
    out: <h1 className="font-hand text-5xl leading-tight text-pink sm:text-6xl">{site.name}</h1>,
  },
  {
    cmd: "cat about.txt",
    out: (
      <>
        <p>{site.tagline}</p>
        <p className="mt-1 text-muted">{site.tags.join(" · ")}</p>
      </>
    ),
  },
  {
    cmd: "ls projects/",
    out: (
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="text-berry underline-offset-4 hover:text-pink hover:underline">
            {p.slug}/
          </Link>
        ))}
      </div>
    ),
  },
];

const TYPE_SPEED = 55; // ms per character
const PAUSE = 450; // ms pause after each command before the next one

function Cursor() {
  return <span className="cursor ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[3px] bg-pink" />;
}

export default function TerminalHero() {
  const reduceMotion = useReducedMotion();
  // step = which command is being typed; typed = how many of its letters are showing
  const [step, setStep] = useState(reduceMotion ? script.length : 0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (step >= script.length) return; // all done
    const cmd = script[step].cmd;
    const timer =
      typed < cmd.length
        ? setTimeout(() => setTyped(typed + 1), TYPE_SPEED) // type the next letter
        : setTimeout(() => { setStep(step + 1); setTyped(0); }, PAUSE); // move to the next command
    return () => clearTimeout(timer);
  }, [step, typed]);

  return (
    <section className="flex flex-1 items-center justify-center px-5 pt-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-2xl"
      >
        {/* photo sticker on the corner, held on with a strip of washi tape */}
        <motion.div
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 6, scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 14 }}
          whileHover={{ rotate: -3, scale: 1.05 }}
          className="absolute -top-14 -right-2 z-10 sm:-top-16 sm:-right-12"
        >
          <span className="absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-6 bg-rose/70 sm:w-20" />
          <img
            src={site.avatar}
            alt={`photo of ${site.name}`}
            className="size-24 rounded-md border-[6px] border-white object-cover shadow-sticker ring-[1.5px] ring-ink sm:size-36"
          />
        </motion.div>

        {/* the window */}
        <div className="overflow-hidden rounded-2xl border-[1.5px] border-ink bg-white shadow-sticker-lg">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b-[1.5px] border-ink bg-petal px-4 py-3">
            <span className="size-3 rounded-full border border-ink bg-[#ff9db5]" />
            <span className="size-3 rounded-full border border-ink bg-[#ffd29d]" />
            <span className="size-3 rounded-full border border-ink bg-[#b9e4b4]" />
            <span className="flex-1 pr-14 text-center font-mono text-xs text-ink">~/shana — zsh</span>
          </div>

          {/* terminal text. Lines that haven't "happened" yet are rendered invisibly
              so the window is already full-size and nothing below it jumps around. */}
          <div className="space-y-5 p-5 font-mono text-sm leading-relaxed text-ink sm:p-8 sm:text-base">
            {script.map((line, i) => {
              const done = i < step;
              const current = i === step;
              return (
                <div key={line.cmd} className={done || current ? "" : "invisible"}>
                  <p>
                    <span className="text-pink">$</span> {current ? line.cmd.slice(0, typed) : line.cmd}
                    {current && <Cursor />}
                  </p>
                  <div className={`mt-1 ${done ? "" : "invisible"}`}>{line.out}</div>
                </div>
              );
            })}
            {/* the final empty prompt */}
            <p className={step >= script.length ? "" : "invisible"}>
              <span className="text-pink">$</span> <Cursor />
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
