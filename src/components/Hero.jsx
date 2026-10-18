// The first thing visitors see: "hello, i'm ___" with a pill whose text
// cycles through phrases, plus the tagline underneath.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";

export default function Hero() {
  const [index, setIndex] = useState(0); // which phrase is showing

  // move to the next phrase every 2.4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % site.rotatingPhrases.length);
    }, 2400);
    return () => clearInterval(timer); // clean up when the component goes away
  }, []);

  return (
    <section className="flex min-h-[78vh] flex-col items-center justify-center px-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-hand text-4xl text-ink sm:text-6xl"
      >
        <span>hello, i’m</span>
        <span className="relative inline-flex h-[1.6em] min-w-[6.5em] items-center justify-center overflow-hidden rounded-full border border-rose/60 bg-white/70 px-6 shadow-[0_8px_30px_-12px_rgba(232,93,151,0.45)]">
          <AnimatePresence mode="wait">
            <motion.span
              key={site.rotatingPhrases[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="whitespace-nowrap text-pink"
            >
              {site.rotatingPhrases[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 max-w-md font-serif text-lg text-muted sm:text-xl"
      >
        {site.tagline}
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-14 font-mono text-sm text-muted transition-colors hover:text-pink"
      >
        $ ls projects ↓
      </motion.a>
    </section>
  );
}
