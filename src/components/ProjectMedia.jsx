// Shows a project's demo on its detail page. Picks the right player
// based on demo.type: "video", "pdf", or "site" (an embedded live website).

const frame = "overflow-hidden rounded-lg border border-line bg-surface shadow-sm";

export default function ProjectMedia({ demo, title }) {
  if (!demo) return null;

  if (demo.type === "video") {
    return (
      <div className={frame}>
        <video src={demo.src} controls playsInline preload="metadata" className="w-full bg-black" />
      </div>
    );
  }

  if (demo.type === "pdf") {
    return (
      <div className={frame}>
        {/* some phones can't show PDFs inline, so the fallback is a link */}
        <object data={demo.src} type="application/pdf" className="h-[75vh] w-full">
          <div className="p-8 text-center">
            <a href={demo.src} target="_blank" rel="noreferrer" className="text-sm font-medium text-accent underline">
              Open the PDF ↗
            </a>
          </div>
        </object>
      </div>
    );
  }

  if (demo.type === "site") {
    return (
      <div className={frame}>
        {/* simple browser bar showing the embedded site's address */}
        <div className="flex items-center gap-2 border-b border-line bg-subtle px-4 py-3">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="ml-3 truncate font-mono text-xs text-muted">{demo.src.replace(/\?.*$/, "")}</span>
        </div>
        <iframe src={demo.src} title={`${title} demo`} loading="lazy" className="h-[70vh] w-full bg-white" />
      </div>
    );
  }

  return null;
}
