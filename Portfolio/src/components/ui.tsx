import { useEffect, useRef, type ReactNode } from "react";
import { FiArrowUpRight, FiGithub, FiMail, FiFileText, FiLinkedin } from "react-icons/fi";

export const icons = {
  github: FiGithub,
  mail: FiMail,
  linkedin: FiLinkedin,
  cv: FiFileText,
};

export const Arrow = ({ className = "" }: { className?: string }) => (
  <FiArrowUpRight aria-hidden className={className} />
);

export const AvailableBadge = ({ label }: { label: string }) => (
  <span className="pill py-1.5 text-xs">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
    </span>
    {label}
  </span>
);

/** Section heading with a large faded word behind it, as in the design. */
export const SectionTitle = ({
  title,
  watermark,
  dark = false,
  center = false,
}: {
  title: string;
  watermark: string;
  dark?: boolean;
  center?: boolean;
}) => (
  <div className={`relative ${center ? "text-center" : ""}`}>
    <span
      aria-hidden
      className={`heading pointer-events-none absolute -top-[0.45em] select-none whitespace-nowrap text-[clamp(4rem,14vw,10rem)] font-semibold ${
        center ? "left-1/2 -translate-x-1/2" : "left-0"
      } ${dark ? "text-white/[0.04]" : "text-black/[0.04]"}`}
    >
      {watermark}
    </span>
    <h2 className="heading relative text-[clamp(2rem,5vw,3.25rem)]">/{title}</h2>
  </div>
);

/** Fades children up when they scroll into view. */
export const Reveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};
