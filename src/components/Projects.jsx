// Projects section: a grid of cards built from data/projects.js.
import { projects } from "../data/projects";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <SectionHeading path="projects" title="things i’ve made" />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 2) * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
