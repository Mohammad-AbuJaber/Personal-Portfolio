export const degree = {
  title: "B.Sc. Computer Systems Engineering",
  school: "Birzeit University",
  period: "Sep 2019 — Feb 2024",
  summary:
    "Focus on Artificial Intelligence. Graduated with a CGPA of 83.5% (Very Good) and made the Dean’s List.",
  tags: ["CGPA 83.5%", "Dean’s List", "AI focus"],
};

export type Program = {
  title: string;
  period: string;
  summary: string;
  badges?: string[];
};

export const programs: Program[] = [
  {
    title: "Next Gen Coders Network (NGCN)",
    period: "Jan 2020 — Apr 2020",
    summary:
      "Cross-cultural program with Indiana University Bloomington and World Learning. Final grade 97.56%.",
    badges: ["Design Thinking", "Project Management", "Intercultural Technical Communication"],
  },
  {
    title: "Access Microscholarship Program",
    period: "Oct 2016 — Jul 2018",
    summary:
      "U.S. Department of State initiative focused on English proficiency, leadership and academic excellence.",
  },
];
