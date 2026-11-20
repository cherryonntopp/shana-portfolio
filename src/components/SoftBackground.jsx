// The background behind every page: one flat pink with a paper-like grain
// texture on top (no gradients).

// a tiny SVG noise pattern, used as the grain texture
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.35 0 0 0 0 0.12 0 0 0 0 0.22 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function SoftBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-blush">
      {/* texture: grain over the pink (raise/lower opacity to taste) */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: grain }} />
    </div>
  );
}
