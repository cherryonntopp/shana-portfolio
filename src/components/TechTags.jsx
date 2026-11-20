// A row of small tags listing a project's tech stack.

export default function TechTags({ tech, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tech.map((t) => (
        <li key={t} className="rounded-md border border-line bg-surface px-3 py-1 text-sm text-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}
