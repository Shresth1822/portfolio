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
    slug: "rescuenet",
    title: "RescueNet",
    shortDescription: "Decentralized Disaster Relief DApp built on ICP.",
    fullDescription:
      "RescueNet is a decentralized application designed to coordinate disaster relief efforts transparently. Built during HackTheBlock (1st Prize), it leverages the Internet Computer Protocol (ICP) to connect donors, volunteers, and victims without intermediaries. The system ensures smart contract-based accountability for all aid distributed.",
    techStack: ["ICP", "Motoko", "React", "Tailwind CSS"],
    features: [
      "Transparent aid distribution",
      "Smart contract-based accountability",
      "Real-time volunteer tracking",
      "Donor-Victim direct connection",
    ],
    links: {
      github: "https://github.com/Shresth1822", // Redirect to profile
    },
    category: "Blockchain",
  },
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
    slug: "sweets-management",
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
    slug: "blockchain-supply-chain",
    title: "Supply Chain Optimization",
    shortDescription: "Research on using Blockchain for medical supplies.",
    fullDescription:
      "Published research paper exploring the use of blockchain technology to enhance the transparency and efficiency of medical supply chains. The study benchmarks various probabilistic data structures to optimize data storage and retrieval in decentralized systems.",
    techStack: ["Blockchain", "Research", "Supply Chain", "Data Structures"],
    features: [
      "Abstract summary",
      "Problem solved: Counterfeit drugs",
      "Benchmarking probabilistic data structures",
    ],
    links: {
      researchPaper: "https://github.com/Shresth1822", // Redirect to profile
      github: "https://github.com/Shresth1822", // Redirect to profile
    },
    category: "Research",
  },
];
