"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Code, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: <Award className="h-6 w-6 text-blue-400" />,
    value: "1st",
    label: "Place in HackTheBlock",
    description: "ICP India + Blockseblock",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-violet-400" />,
    value: "2",
    label: "Research Papers",
    description: "Published in International Journals",
  },
  {
    icon: <Code className="h-6 w-6 text-blue-400" />,
    value: "5+",
    label: "Full Stack Projects",
    description: "Deployed & Open Source",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-violet-400" />,
    value: "8.10",
    label: "CGPA",
    description: "B.E. Computer Science",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Engineering Secure & Scalable Digital Solutions
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I am a final-year Computer Science student specializing in{" "}
                <span className="text-foreground font-medium">
                  Blockchain Technology
                </span>
                . My passion lies in bridging the gap between robust backend
                architectures and intuitive user experiences.
              </p>
              <p>
                With a strong foundation in{" "}
                <span className="text-foreground font-medium">
                  Full Stack Development
                </span>
                , I treat security as a first-class citizen—implementing
                Role-Based Access Control, robust authentication, and secure
                data structures in every project I build.
              </p>
              <p>
                My active research in{" "}
                <span className="text-foreground font-medium">
                  Supply Chain Optimization
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  Probabilistic Data Structures
                </span>
                drives me to write efficient, optimized code that solves
                real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-colors"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-secondary/50 rounded-full">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-violet-500">
                    {stat.value}
                  </div>
                  <div className="font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
