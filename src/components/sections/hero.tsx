"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m <span className="text-gradient">Shresth Varshney</span>
          <br />
          <span className="text-foreground/80 text-2xl md:text-4xl lg:text-5xl mt-2 block">
            Full Stack Blockchain Engineer
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[600px] text-muted-foreground text-lg md:text-xl mb-8"
        >
          I build secure, scalable systems with real-world impact. Specializing
          in Next.js, Secure Backend Architecture, and Decentralized
          Applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button size="lg" variant="premium" className="group" asChild>
            <Link href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10"
            asChild
          >
            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>

          <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-4">
            <Link
              href="https://github.com/Shresth1822"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:shresth.varshney22@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="h-6 w-6 flex items-center justify-center font-bold">
                @
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-blue-400 absolute top-0 left-0 blur-[1px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
