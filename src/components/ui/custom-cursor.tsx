"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 flex items-center justify-center mix-blend-difference hidden md:flex"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering
            ? "rgba(255, 255, 255, 1)"
            : "transparent",
          borderColor: isHovering
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 1)",
        }}
        transition={{ duration: 0.2 }}
        className="w-full h-full rounded-full border-2 border-white bg-transparent"
      />
      <motion.div
        animate={{ scale: isHovering ? 0 : 1 }}
        className="absolute w-2 h-2 bg-white rounded-full"
      />
    </motion.div>
  );
}
