export type Job = {
  title: string;
  company: string;
  period: string;
  badge: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "Jaffal Group for Trade & Investment",
    period: "May 2024 — Present",
    badge: "Full-time · Current",
    current: true,
    highlights: [
      "Develop and maintain React frontends for several large-scale enterprise systems.",
      "Built a library of reusable, scalable UI components with React and Tailwind CSS, focused on responsive design and usability.",
      "Integrate REST APIs with attention to performance, error handling and maintainability.",
      "Deliver features on schedule and support urgent production deployments alongside backend and cross-functional teams.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "REST", "Agile"],
  },
  {
    title: "Frontend Developer (Intern)",
    company: "Foothill Technology Solutions",
    period: "Aug 2023 — Dec 2023",
    badge: "Internship · 5 months",
    highlights: [
      "Developed user-friendly, responsive web applications.",
      "Built REST APIs alongside frontend work, getting hands-on with both sides of the stack.",
    ],
    stack: ["React", "JavaScript", "REST APIs"],
  },
];
