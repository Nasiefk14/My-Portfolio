import { profile } from "../data";
import { Arrow, AvailableBadge, Reveal } from "./ui";

const Contact = () => (
  <section id="contact" className="bg-gradient-to-b from-canvas to-surface px-4 py-32 sm:px-6">
    <Reveal className="mx-auto max-w-2xl text-center">
      <AvailableBadge label={profile.available} />
      <h2 className="heading mt-6 text-[clamp(2.25rem,6vw,3.75rem)] font-semibold">Have a project in mind?</h2>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Let's build something clear and useful together. Send a message below or email me at{" "}
        <a href={`mailto:${profile.email}`} className="text-ink underline underline-offset-4">
          {profile.email}
        </a>
        .
      </p>

      <form
        action="https://getform.io/f/2375c45d-b671-4732-9d21-ba913639b7e7"
        method="POST"
        className="mt-10 grid gap-4 text-left sm:grid-cols-2"
      >
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input type="text" name="name" required autoComplete="name" placeholder="Your name" className="field" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" className="field" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">Message</span>
          <textarea name="message" required rows={5} placeholder="Tell me about your project..." className="field resize-y" />
        </label>
        <div className="text-center sm:col-span-2">
          <button type="submit" className="pill-dark mt-2">
            Contact Me <Arrow />
          </button>
        </div>
      </form>
    </Reveal>
  </section>
);

export default Contact;
