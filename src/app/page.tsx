import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
