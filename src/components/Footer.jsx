// Small footer at the bottom of every page.
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="py-10 text-center font-mono text-xs text-muted">
      made with ♡ by {site.name} · {new Date().getFullYear()}
    </footer>
  );
}
