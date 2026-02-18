"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            A selection of my work in Blockchain, Full Stack Development, and
            Research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant={
                        project.category === "Research"
                          ? "secondary"
                          : "outline"
                      }
                      className="mb-2"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group/btn"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                  {project.links.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.links.github} target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
