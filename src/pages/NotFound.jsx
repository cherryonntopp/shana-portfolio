// Shown for any url that doesn't exist.
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-muted">
        <span className="text-pink">~$</span> cd {pathname}
      </p>
      <h1 className="mt-4 font-hand text-4xl text-ink">oops, nothing here ✿</h1>
      <Link to="/" className="mt-8 font-mono text-sm text-pink underline">
        take me home
      </Link>
    </section>
  );
}
