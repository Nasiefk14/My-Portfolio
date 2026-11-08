import portrait from "../assets/portrait.jpg";
import { profile, socials } from "../data";
import { icons } from "./ui";

const Footer = () => (
  <footer className="bg-surface px-4 pb-10 sm:px-6">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4">
      <a href="#top" className="pill-dark py-1.5 pl-1.5">
        <img src={portrait} alt="" className="h-7 w-7 rounded-full object-cover grayscale" />
        {profile.firstName} {profile.lastName}
      </a>
      {socials.map((s) => {
        const Icon = icons[s.icon];
        return (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="pill text-xs">
            <Icon /> {s.label}
          </a>
        );
      })}
      <p className="w-full pt-6 text-center text-xs text-muted">© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</p>
    </div>
  </footer>
);

export default Footer;
