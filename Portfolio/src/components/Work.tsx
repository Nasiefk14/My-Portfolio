import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { profile, projects, type Project, type ProjectCategory } from "../data";
import { Arrow, Reveal, SectionTitle } from "./ui";

const filters: ("All" | ProjectCategory)[] = ["All", "Fullstack", "Frontend"];

/** Shown when a project has no screenshot: the title set large on a dark panel. */
const TextCover = ({ project }: { project: Project }) => (
  <div className="flex aspect-[16/9] w-full flex-col justify-end bg-night bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_55%)] p-6 text-white transition duration-500 group-hover:scale-[1.03]">
    <p className="heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold">{project.title}</p>
    <p className="mt-2 text-xs uppercase tracking-widest text-white/50">{project.tags.slice(0, 3).join(" · ")}</p>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const href = project.live ?? project.repo;
  const cover = project.image ? (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
    />
  ) : (
    <TextCover project={project} />
  );

  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-surface p-3 shadow-card">
      <div className="relative overflow-hidden rounded-xl">
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
            {cover}
            <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-pill transition group-hover:opacity-100">
              <Arrow />
            </span>
          </a>
        ) : (
          cover
        )}
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.description}</p>
            {project.note && <p className="mt-2 text-xs italic text-muted">{project.note}</p>}
          </div>
          <div className="flex shrink-0 gap-2">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} source on GitHub`} className="pill h-9 w-9 justify-center p-0">
                <FiGithub />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="pill h-9 w-9 justify-center p-0">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-xs">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Work = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <Reveal>
        <SectionTitle title="Selected Work" watermark="Portfolio" center />
      </Reveal>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" className="flex gap-1 text-sm">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 transition ${filter === f ? "bg-ink text-canvas" : "hover:bg-black/5"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer" className="pill text-xs">
          View All Work <Arrow />
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Work;
