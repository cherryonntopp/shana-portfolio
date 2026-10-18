// The dreamy background behind every page: a soft pink gradient with a few
// twinkling sparkles (a light take on the starry sky in the inspo).
import { motion } from "framer-motion";

// where each sparkle sits (percent of the screen) and how big it is
const sparkles = [
  { top: 12, left: 8, size: 10 },
  { top: 22, left: 86, size: 14 },
  { top: 38, left: 18, size: 8 },
  { top: 55, left: 92, size: 9 },
  { top: 70, left: 6, size: 12 },
  { top: 84, left: 74, size: 8 },
  { top: 8, left: 58, size: 7 },
  { top: 64, left: 46, size: 6 },
];

export default function SoftBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* gradient wash + two blurry blobs of color */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush via-[#fff0f5] to-[#fde8f0]" />
      <div className="absolute -top-32 -right-24 size-[28rem] rounded-full bg-petal/70 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 size-[30rem] rounded-full bg-[#f3e6ff]/60 blur-3xl" />

      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-rose"
          style={{ top: `${s.top}%`, left: `${s.left}%`, fontSize: s.size }}
          animate={{ opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}
