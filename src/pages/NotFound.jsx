// Shown for any url that doesn't exist.
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">Page not found</h1>
      <Link to="/" className="mt-8 text-sm font-medium text-accent hover:underline">
        Back to home
      </Link>
    </section>
  );
}
