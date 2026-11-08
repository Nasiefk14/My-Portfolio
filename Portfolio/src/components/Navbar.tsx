import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile, projects, services } from "../data";
import { Arrow, AvailableBadge } from "./ui";

const links = [
  { label: "Work", href: "#work", count: String(projects.length).padStart(2, "0") },
  { label: "Services", href: "#services", count: String(services.length).padStart(2, "0") },
  { label: "Experience", href: "#experience", count: `${profile.yearsExperience}y` },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "bg-canvas/80 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" aria-label="Back to top">
          <AvailableBadge label={profile.available} />
        </a>

        <ul className="hidden items-center gap-10 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:opacity-60">
                {l.label}
                {l.count && <sup className="ml-1 text-[10px] text-muted">({l.count})</sup>}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="pill-dark hidden md:inline-flex">
          Let's Talk <Arrow />
        </a>

        <button
          className="pill h-10 w-10 justify-center p-0 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-canvas transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96 border-b border-line" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 pb-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="heading flex items-center justify-between border-b border-line py-4 text-2xl"
              >
                {l.label} <Arrow className="text-xl" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
