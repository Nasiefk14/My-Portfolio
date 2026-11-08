import { useState } from "react";
import { FiX } from "react-icons/fi";
import { services } from "../data";
import { Arrow, Reveal, SectionTitle } from "./ui";

const Services = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 pt-36 sm:px-6">
      <Reveal>
        <SectionTitle title="Services" watermark="Service" />
      </Reveal>

      <ul className="mt-14">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <li key={s.title}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`relative flex w-full items-center justify-between gap-6 px-4 text-left transition-all duration-300 sm:px-6 ${
                  isOpen ? "my-2 rounded-lg bg-night py-8 text-white shadow-card" : "border-b border-line py-7 hover:bg-black/[0.03]"
                }`}
              >
                <div>
                  <h3 className="heading text-[clamp(1.6rem,4.5vw,3rem)]">{s.title}</h3>
                  <p
                    className={`max-w-sm overflow-hidden text-sm text-white/70 transition-all duration-300 ${
                      isOpen ? "mt-4 max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>

                {isOpen && (
                  <img
                    src={s.image}
                    alt=""
                    className="pointer-events-none absolute right-24 top-1/2 hidden w-56 -translate-y-1/2 rotate-[6deg] rounded-lg border-4 border-white shadow-2xl lg:block"
                  />
                )}

                <span className="shrink-0 text-3xl">{isOpen ? <FiX /> : <Arrow />}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Services;
