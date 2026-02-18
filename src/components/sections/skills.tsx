"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "Solidity", "Dart"],
  Frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Flutter",
    "HTML5/CSS3",
  ],
  Backend: ["Node.js", "Express.js", "Supabase", "Firebase", "REST APIs"],
  Database: ["PostgreSQL", "MySQL", "MongoDB"],
  Blockchain: [
    "Ethereum",
    "Smart Contracts",
    "Hardhat",
    "Web3.js",
    "Ethers.js",
    "ICP",
  ],
  Security: ["JWT", "OAuth", "RBAC", "RLS (Supabase)", "Cryptography"],
  Tools: ["Git", "GitHub", "Docker", "Vercel", "Postman", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
