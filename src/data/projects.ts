import type { StaticImageData } from "next/image";
import confidentialPreview from "@/assets/confidential-preview.jpg";

export type Project = {
  title: string;
  status: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  imageAlt: string;
  confidential?: boolean;
};

export const featuredProject: Project = {
  title: "A full-stack web platform, under wraps",
  status: "In progress · Live in production",
  description:
    "A live product with a separate experience for each of its user roles, which I’m building end to end. The details are private for now, but I’m happy to walk you through the architecture and the code in an interview.",
  tags: ["Role-based access", "Responsive UI", "Full-stack"],
  image: confidentialPreview,
  imageAlt: "Blurred preview of a confidential project",
  confidential: true,
};
