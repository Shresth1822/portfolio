import { useState, useEffect } from "react";

export function useKonamiCode(callback: () => void) {
  const [keys, setKeys] = useState<string[]>([]);
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const updated = [...prev, e.key];
        if (updated.length > konamiCode.length) {
          updated.shift();
        }
        if (JSON.stringify(updated) === JSON.stringify(konamiCode)) {
          callback();
        }
        return updated;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback, konamiCode]); // Dependencies might cause re-renders if callback changes
}
