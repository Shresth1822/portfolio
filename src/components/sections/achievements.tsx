"use client";

import { motion } from "framer-motion";
import { Trophy, FileText, GraduationCap, Award } from "lucide-react";

const achievements = [
  {
    type: "Award",
    title: "1st Prize - HackTheBlock",
    organization: "ICP India + Blockseblock",
    date: "2024",
    description:
      "Built RescueNet, a decentralized disaster relief platform on ICP.",
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
  },
  {
    type: "Research",
    title: "Published Research Paper",
    organization: "International Journal",
    date: "2024",
    description:
      "Enhancing Supply Chain Management of Medical Supplies Using Blockchain.",
    icon: <FileText className="h-6 w-6 text-zinc-400" />,
  },
  {
    type: "Research",
    title: "Published Research Paper",
    organization: "International Journal",
    date: "2023",
    description:
      "Benchmarking Probabilistic Data Structures for efficient data retrieval.",
    icon: <FileText className="h-6 w-6 text-zinc-400" />,
  },
  {
    type: "Education",
    title: "Bachelor of Engineering (CSE)",
    organization: "Chandigarh University",
    date: "2021 - 2025",
    description: "Specialization in Blockchain Technology. CGPA: 8.10/10.",
    icon: <GraduationCap className="h-6 w-6 text-zinc-400" />,
  },
];

const certifications = [
  "Blockchain (Ethereum & Polygon)",
  "Cisco Cybersecurity",
  "Applied Cryptography",
  "IBM DevOps",
  "Microsoft Generative AI",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-secondary/5 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-zinc-400 to-zinc-800 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline / List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" /> Key Milestones
            </h3>
            <div className="relative border-l border-border/50 ml-3 pl-8 py-2 space-y-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-zinc-500" />
                  </div>
                  <div className="bg-card/50 border border-border/50 rounded-lg p-4 hover:border-zinc-500/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-zinc-400">
                        {item.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <div className="text-sm text-muted-foreground mb-2">
                      {item.organization}
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FileText className="mr-2 h-6 w-6 text-primary" /> Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center p-4 bg-card/30 border border-border/50 rounded-lg hover:bg-card/50 transition-colors"
                >
                  <Award className="h-5 w-5 text-zinc-400 mr-3 shrink-0" />
                  <span className="font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
