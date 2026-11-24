export type SkillGroup = {
  title: string;
  level: 1 | 2 | 3;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Daily drivers",
    level: 3,
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST APIs",
      "Git & GitHub",
      "Responsive design",
    ],
  },
  {
    title: "Hands-on",
    level: 2,
    items: ["Vite", "Material UI", "SOAP APIs", "MySQL", "MongoDB", "Payment SDKs"],
  },
  {
    title: "Familiar",
    level: 1,
    items: ["Node.js", "Jest", "Cypress", "Bootstrap", "Agile / Scrum"],
  },
];
