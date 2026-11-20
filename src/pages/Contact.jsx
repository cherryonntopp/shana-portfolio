// Contact page: email front and center, plus github and linkedin.
import { site } from "../data/site";
import FadeIn from "../components/FadeIn";
import Page from "../components/Page";
import SectionHeading from "../components/SectionHeading";
import { GithubIcon, LinkedinIcon, MailIcon } from "../components/Icons";

const linkClass =
  "flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-white px-5 py-2.5 text-ink shadow-sticker-sm transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-petal hover:shadow-sticker";

export default function Contact() {
  return (
    <Page>
      <SectionHeading path="contact" title="say hi!" />

      <FadeIn>
        <p className="max-w-lg text-lg text-ink/90">
          i’m always happy to connect! im open to chatting new projects, career opportunities, or even your favorite restaurant ✿
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${site.links.email}`} className={linkClass}>
            <MailIcon className="size-4" /> {site.links.email}
          </a>
          <a href={site.links.github} target="_blank" rel="noreferrer" className={linkClass}>
            <GithubIcon className="size-4" /> github
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            <LinkedinIcon className="size-4" /> linkedin
          </a>
        </div>
      </FadeIn>
    </Page>
  );
}
