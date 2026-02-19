"use client";

import { CustomCursor } from "@/components/ui/custom-cursor";
import { AchievementManager } from "@/components/achievement-manager";
import { useKonamiCode } from "@/hooks/use-konami-code";

export function GamificationWrapper() {
  useKonamiCode(() => {
    window.dispatchEvent(new Event("konami-code-activated"));
    document.body.classList.toggle("hacker-mode");
  });

  return (
    <>
      <CustomCursor />
      <AchievementManager />
    </>
  );
}
