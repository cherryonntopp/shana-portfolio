// Contact section: email front and center, plus github and linkedin.
import { site } from "../data/site";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const linkClass =
  "flex items-center gap-2 rounded-full border border-berry/25 bg-white/70 px-5 py-2.5 text-ink transition hover:-translate-y-0.5 hover:border-pink hover:text-pink";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <SectionHeading path="contact" title="say hi!" />

      <FadeIn>
        <p className="max-w-lg text-lg text-ink/90">
          i’m always happy to connect! im open to chatting new projects, career opportunities, or even your favorite restaurant ✿
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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
    </section>
  );
}
