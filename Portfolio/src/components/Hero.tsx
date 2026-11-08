import { useRef, type PointerEvent } from "react";
import portrait from "../assets/portrait-cutout.webp";
import { profile, socials } from "../data";
import { Arrow, icons } from "./ui";

const SocialList = () => (
  <ul className="flex flex-wrap gap-3 md:flex-col md:items-end">
    {socials.map((s) => {
      const Icon = icons[s.icon];
      return (
        <li key={s.label}>
          <a href={s.href} target="_blank" rel="noreferrer" className="pill py-1.5 text-xs">
            <Icon /> {s.label}
          </a>
        </li>
      );
    })}
    {profile.cv && (
      <li>
        <a href={profile.cv} target="_blank" rel="noreferrer" className="pill py-1.5 text-xs">
          <icons.cv /> CV
        </a>
      </li>
    )}
  </ul>
);

/** Black and white cut-out portrait; a circle of colour follows the cursor. */
const Portrait = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerDown={onMove} className="spotlight relative z-10 w-[min(90vw,30rem)] touch-pan-y">
      <img src={portrait} alt={`Portrait of ${profile.firstName} ${profile.lastName}`} className="block w-full grayscale" />
      <img src={portrait} alt="" aria-hidden className="spotlight-colour pointer-events-none absolute inset-0 w-full" />
    </div>
  );
};

const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-surface pt-24 sm:pt-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h1 className="heading flex flex-wrap justify-center gap-x-[0.25em] text-center text-[clamp(3.5rem,15vw,11rem)] font-bold">
        <span className="text-outline font-semibold">{profile.firstName}</span>
        <span>{profile.lastName}</span>
      </h1>

      <div className="relative grid items-end md:grid-cols-[1fr_auto_1fr]">
        <div className="order-2 pb-10 md:order-1 md:pb-16">
          <h2 className="text-2xl font-medium sm:text-3xl">{profile.role}</h2>
          <p className="mt-2 max-w-xs text-sm text-muted">{profile.tagline}</p>
          <a href="#contact" className="pill-dark mt-5">
            Let's collaborate <Arrow />
          </a>
        </div>

        <div className="order-1 -mt-[6vw] flex justify-center md:order-2 md:-mt-[7rem]">
          <Portrait />
        </div>

        <div className="order-3 pb-10 md:flex md:justify-end md:pb-16">
          <SocialList />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
