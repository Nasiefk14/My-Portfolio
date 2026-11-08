import { experience, profile } from "../data";
import { Reveal, SectionTitle } from "./ui";

const Experience = () => (
  <section id="experience" className="mt-40 bg-night py-28 text-white">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <SectionTitle title="Experience" watermark="Experience" dark />
        <p className="text-white/70">
          {profile.yearsExperience} years of experience
        </p>
      </Reveal>

      <Reveal>
        <ul className="mt-14">
          {experience.map((e, i) => (
            <li
              key={i}
              className="flex flex-wrap items-start justify-between gap-2 border-b border-night-line px-2 py-7 transition hover:bg-white/[0.03] sm:px-4"
            >
              <div>
                <p className="text-lg">{e.company}</p>
                <p className="mt-1 text-white/50">{e.role}</p>
                <p className="mt-2 max-w-xl text-sm text-white/40">{e.highlight}</p>
              </div>
              <p className="shrink-0 text-white/60">{e.period}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Experience;
