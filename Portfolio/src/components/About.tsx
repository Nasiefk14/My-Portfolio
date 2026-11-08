import { profile } from "../data";
import { Reveal, SectionTitle } from "./ui";

const stack = ["TypeScript", "Node.js", "Express", "React", "Svelte", "PostgreSQL", "MongoDB", "Tailwind CSS", "Playwright", "Docker", "Claude Code"];

const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6">
    <Reveal className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
      <div>
        <SectionTitle title="About" watermark="About" />
        <p className="relative mt-6 text-sm text-muted">Based in {profile.location}</p>
      </div>
      <div className="space-y-5 text-lg leading-relaxed text-muted">
        <p>
          <span className="text-ink">I'm {profile.firstName}, a software engineer</span> with {profile.yearsExperience}{" "}
          years of experience. For over four years I built and supported production systems at Wyzetalk, a
          mobile-first platform used by about 500,000 frontline workers, delivering integrations and features for
          20+ enterprise clients in retail, mining and automotive manufacturing.
        </p>
        <p>
          I take work from API contract through to go-live, own production incidents and work directly with client
          IT teams when things get tricky. Lately I designed, built and launched Carbon Invoices, a multi-tenant
          invoicing SaaS, using an AI-assisted workflow where every change is specified, reviewed and tested.
        </p>
        <p className="text-base">Away from the keyboard: speedcubing, welding, gaming and cars.</p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-ink">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
);

export default About;
