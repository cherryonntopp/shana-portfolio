// The homepage: hero → about → projects → contact.
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
