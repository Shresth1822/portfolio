import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 bg-background">
      <div className="container px-4 md:px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.shortDescription}
            </p>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Overview</h3>
              <p className="mb-8 text-lg leading-relaxed">
                {project.fullDescription}
              </p>

              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-card/50 backdrop-blur-md border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-lg">Project Info</h4>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Technologles
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Category
                    </div>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    {project.links.github && (
                      <Button className="w-full" asChild>
                        <Link href={project.links.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> View Source
                        </Link>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={project.links.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
