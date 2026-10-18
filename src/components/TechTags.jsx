// A row of small tags listing a project's tech stack.

export default function TechTags({ tech, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tech.map((t) => (
        <li key={t} className="rounded-full bg-white/70 px-3 py-1 font-mono text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}
