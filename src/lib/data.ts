export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  links: {
    github?: string;
    demo?: string;
    researchPaper?: string;
    externalCaseStudy?: string;
  };
  image?: string; // Placeholder for now
  category: "Full Stack" | "Blockchain" | "Backend" | "Research";
}

export const projects: Project[] = [
  {
    slug: "splitify",
    title: "Splitify",
    shortDescription: "Group expense splitting app with Supabase RLS.",
    fullDescription:
      "Splitify is a robust expense management application that simplifies group spending. It features secure authentication via Supabase, Row-Level Security (RLS) for data privacy, and a real-time dashboard for tracking expenses. The goal was to build a secure, multi-user system with a focus on clean UI/UX.",
    techStack: ["React.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Group expense tracking",
      "Dashboard analytics",
      "Secure authentication (Supabase RLS)",
      "Real-time updates",
    ],
    links: {
      github: "https://github.com/Shresth1822/split-expense#",
      externalCaseStudy: "https://splitify.space",
    },
    category: "Full Stack",
  },
  {
    slug: "sweets-management-system",
    title: "Sweets Management System",
    shortDescription: "Secure RESTful API for inventory management.",
    fullDescription:
      "A comprehensive backend system for managing inventory and sales in a sweets shop. This project emphasizes backend engineering skills, including secure API design, JWT authentication, and complex database queries. It features full CRUD operations and a search/filtering system.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
    features: [
      "Full CRUD operations",
      "JWT authentication",
      "Secure API endpoints",
      "Search & filtering system",
    ],
    links: {
      github: "https://github.com/Shresth1822", // Redirect to profile
    },
    category: "Backend",
  },
  {
    slug: "i-c-m-s",
    title: "I.C.M.S",
    shortDescription: "Inventory Control Management System.",
    fullDescription:
      "A scalable system designed for managing stock levels, processing orders, and tracking inventory across multiple locations to improve operational efficiency and reduce discrepancies.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Real-time inventory tracking",
      "Order processing modules",
      "Data analytics dashboard",
      "Role-based access control",
    ],
    links: {
      github: "https://github.com/Shresth1822", // Redirect to profile
    },
    category: "Full Stack",
  },
  {
    slug: "shop-management-system",
    title: "Shop Management System",
    shortDescription:
      "Complete point-of-sale and shop administration platform.",
    fullDescription:
      "An integrated platform designed to handle daily retail store operations, including sales tracking, billing, employee management, and customer relations.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    features: [
      "Point of Sale (POS) interface",
      "Employee shift tracking",
      "Customer database management",
      "Automated sales reporting",
    ],
    links: {
      github: "https://github.com/Shresth1822", // Redirect to profile
    },
    category: "Full Stack",
  },
];
