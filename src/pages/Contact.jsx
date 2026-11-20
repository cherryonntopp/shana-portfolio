// Contact page: email front and center, plus github and linkedin.
import { site } from "../data/site";
import FadeIn from "../components/FadeIn";
import Page from "../components/Page";
import SectionHeading from "../components/SectionHeading";
import { GithubIcon, LinkedinIcon, MailIcon } from "../components/Icons";

const linkClass =
  "flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink";

export default function Contact() {
  return (
    <Page>
      <SectionHeading eyebrow="Contact" title="Get in touch" />

      <FadeIn>
        <p className="max-w-lg text-lg leading-relaxed text-ink/85">
          I’m open to internships, collaborations, and conversations about new projects. The best way to reach me is
          by email.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${site.links.email}`} className={`${linkClass} border-ink bg-ink text-white hover:bg-accent hover:border-accent`}>
            <MailIcon className="size-4" /> {site.links.email}
          </a>
          <a href={site.links.github} target="_blank" rel="noreferrer" className={linkClass}>
            <GithubIcon className="size-4" /> GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            <LinkedinIcon className="size-4" /> LinkedIn
          </a>
        </div>
      </FadeIn>
    </Page>
  );
}
