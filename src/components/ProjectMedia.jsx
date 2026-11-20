// Shows a project's demo on its detail page. Picks the right player
// based on demo.type: "video", "pdf", or "site" (an embedded live website).

const frame = "overflow-hidden rounded-2xl border-[1.5px] border-ink bg-white shadow-sticker";

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
            <a href={demo.src} target="_blank" rel="noreferrer" className="font-mono text-pink underline">
              open the pdf ↗
            </a>
          </div>
        </object>
      </div>
    );
  }

  if (demo.type === "site") {
    return (
      <div className={frame}>
        {/* fake browser bar, for a cute framed look */}
        <div className="flex items-center gap-2 border-b-[1.5px] border-ink bg-petal px-4 py-3">
          <span className="size-3 rounded-full border border-ink bg-[#ff9db5]" />
          <span className="size-3 rounded-full border border-ink bg-[#ffd29d]" />
          <span className="size-3 rounded-full border border-ink bg-[#b9e4b4]" />
          <span className="ml-3 truncate font-mono text-xs text-muted">{demo.src.replace(/\?.*$/, "")}</span>
        </div>
        <iframe src={demo.src} title={`${title} demo`} loading="lazy" className="h-[70vh] w-full bg-white" />
      </div>
    );
  }

  return null;
}
