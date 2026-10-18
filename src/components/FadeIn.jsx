// Wrap anything in <FadeIn> to make it gently fade up when it scrolls into view.
// `delay` (in seconds) lets you stagger several items.
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
