// Projects page: a grid of cards built from data/projects.js.
// Four across on big screens so they all fit without scrolling.
import { projects } from "../data/projects";
import FadeIn from "../components/FadeIn";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  return (
    <Page className="max-w-6xl">
      <SectionHeading path="projects" title="things i’ve made" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.08} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Page>
  );
}
