// The background behind every page: pink and lavender color washes with a
// light paper-grain texture on top.

// a tiny SVG noise pattern, used as the grain texture
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.3 0 0 0 0 0.15 0 0 0 0 0.25 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function SoftBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* color: pink up top, lavender below, with a couple of soft color pools */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 12% 8%, #ffc4dc 0, transparent 45%)," +
            "radial-gradient(at 90% 35%, #dccbff 0, transparent 45%)," +
            "linear-gradient(180deg, #ffdbe9 0%, #f6dcf3 50%, #e4dbff 100%)",
        }}
      />
      {/* texture: subtle grain over everything (change opacity to taste) */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: grain }} />
    </div>
  );
}
