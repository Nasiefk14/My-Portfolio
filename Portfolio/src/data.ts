import Todo from "./assets/Todo.jpeg";
import Chat from "./assets/Chat.jpeg";
import PortfolioShot from "./assets/Portfolio.jpeg";

export const profile = {
  firstName: "Nasief",
  lastName: "Khan",
  role: "Software Engineer",
  tagline: "TypeScript, Node.js, React and Svelte. I build production systems and the integrations that keep them in sync.",
  location: "Cape Town, South Africa",
  email: "nasiefk14@gmail.com",
  github: "https://github.com/Nasiefk14",
  linkedin: "https://www.linkedin.com/in/nasiefk14",
  cv: "/Nasief_Khan_CV.pdf",
  yearsExperience: "6+",
  available: "Available for work",
};

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

export type ProjectCategory = "Fullstack" | "Frontend";

export type Project = {
  title: string;
  description: string;
  /** Screenshot; projects without one get a typographic cover */
  image?: string;
  category: ProjectCategory;
  tags: string[];
  repo?: string;
  live?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Carbon Invoices",
    description:
      "Multi-tenant invoicing SaaS with Postgres row-level security, PDF invoices, VAT handling and full CI. In production and used by 2 businesses.",
    category: "Fullstack",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    note: "Source code available on request",
  },
  {
    title: "Todo App",
    description: "Task manager with realtime sync and auth.",
    image: Todo,
    category: "Fullstack",
    tags: ["React", "Firebase"],
    repo: "https://github.com/Nasiefk14/React-Firebase-Todo",
    live: "https://react-todo-7dce0.web.app",
  },
  {
    title: "Chat App",
    description: "Realtime chat rooms with Google sign-in.",
    image: Chat,
    category: "Fullstack",
    tags: ["React", "Firebase"],
    repo: "https://github.com/Nasiefk14/ReactChatApp",
    live: "https://chatapp-d3259.web.app/",
  },
  {
    title: "Portfolio",
    description: "This site. Responsive, typed and built for speed.",
    image: PortfolioShot,
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind"],
    repo: "https://github.com/Nasiefk14/My-Portfolio",
    live: "https://nasief-khan.vercel.app/",
  },
];

export const services = [
  {
    title: "Full Stack Engineering",
    description: "Features owned end to end in TypeScript, Node.js and React or Svelte, from API contract through to go-live and support.",
    image: PortfolioShot,
  },
  {
    title: "API & Payroll Integrations",
    description: "HR and payroll integrations with systems like Sage and PeopleSoft: auth, webhooks, data sync and validation built for reliable go-lives.",
    image: Chat,
  },
  {
    title: "Frontend Development",
    description: "Responsive interfaces in React, Svelte and Tailwind CSS, from dashboards to mobile-first features.",
    image: Todo,
  },
  {
    title: "AI-Assisted Delivery",
    description: "Spec-driven work with Claude Code and Cursor in small reviewable steps, every change verified with Jest and Playwright.",
    image: PortfolioShot,
  },
];

export const experience = [
  {
    company: "Independent",
    role: "Software Engineer · AI-assisted development",
    highlight: "Designed, built and launched Carbon Invoices, a multi-tenant invoicing SaaS.",
    period: "Jun 2026 – Now",
  },
  {
    company: "Wyzetalk",
    role: "Software Engineer · API Integrations",
    highlight: "100+ integrations for 20+ enterprise clients on a platform used by about 500,000 frontline workers.",
    period: "Jan 2023 – May 2026",
  },
  {
    company: "Wyzetalk",
    role: "Frontend Template Developer",
    highlight: "Cut template delivery from a week to 2 days and was promoted within 8 months.",
    period: "Jan 2022 – Dec 2022",
  },
  {
    company: "Databalk.Africa",
    role: "Backend / Frontend Developer",
    highlight: "Node.js and Express features for a housing management platform used in the Netherlands.",
    period: "Mar 2021 – Sep 2021",
  },
  {
    company: "Younglings Africa",
    role: "Full-Stack Developer Intern",
    highlight: "Built React, Node.js and MongoDB projects and won a hackathon against 10 teams.",
    period: "Mar 2020 – Feb 2021",
  },
  {
    company: "CiTi",
    role: "Python Learnership",
    highlight: "Selected as 1 of 30 candidates for a competitive software engineering programme.",
    period: "Oct 2019 – Feb 2020",
  },
];
