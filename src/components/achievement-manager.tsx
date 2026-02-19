"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const achievements: Achievement[] = [
  { id: "hero", title: "Explorer", description: "Visited the portfolio" },
  {
    id: "projects",
    title: "Project Hunter",
    description: "Viewed the Projects section",
  },
  {
    id: "skills",
    title: "Skill Master",
    description: "Checked out the Skills section",
  },
  {
    id: "contact",
    title: "Connector",
    description: "Reached the Contact section",
  },
  {
    id: "secret",
    title: "Secret Keeper",
    description: "Discovered the Konami Code",
  },
];

export function AchievementManager() {
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [currentNotification, setCurrentNotification] =
    useState<Achievement | null>(null);

  useEffect(() => {
    // Check initial visit
    if (!unlocked.includes("hero")) {
      unlock("hero");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && !unlocked.includes(id)) {
              unlock(id);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked]);

  useEffect(() => {
    const handleKonami = () => unlock("secret");
    window.addEventListener("konami-code-activated", handleKonami);
    return () =>
      window.removeEventListener("konami-code-activated", handleKonami);
  }, []);

  const unlock = (id: string) => {
    if (unlocked.includes(id)) return;

    // Check local storage to avoid spamming on reload
    if (localStorage.getItem(`achievement_${id}`)) {
      setUnlocked((prev) => [...prev, id]);
      return;
    }

    const achievement = achievements.find((a) => a.id === id);
    if (achievement) {
      setUnlocked((prev) => [...prev, id]);
      setCurrentNotification(achievement);
      localStorage.setItem(`achievement_${id}`, "true");

      // Play sound
      const audio = new Audio("/sounds/achievement.mp3"); // Ensure this file exists or use a synth
      // audio.play().catch(e => console.log("Audio play failed", e)); // Placeholder

      setTimeout(() => setCurrentNotification(null), 3000);
    }
  };

  return (
    <AnimatePresence>
      {currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-yellow-500/50 rounded-lg p-4 shadow-lg shadow-yellow-500/20 flex items-center gap-4 min-w-[300px]"
        >
          <div className="p-2 bg-yellow-500/20 rounded-full">
            <Trophy className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h4 className="font-bold text-yellow-500 text-sm uppercase tracking-wider">
              Achievement Unlocked
            </h4>
            <p className="font-semibold text-foreground">
              {currentNotification.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {currentNotification.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
