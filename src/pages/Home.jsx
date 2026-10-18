// The homepage: terminal hero → about → projects → contact.
import TerminalHero from "../components/TerminalHero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <TerminalHero />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
