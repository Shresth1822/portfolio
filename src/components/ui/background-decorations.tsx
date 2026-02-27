"use client";

import { motion } from "framer-motion";

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Left Side: Wave Pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-[300px] opacity-20 hidden lg:block">
        <svg
          viewBox="0 0 100 800"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 Q50,200 20,400 T0,800"
            fill="none"
            stroke="url(#gradient-left)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M10,0 Q60,200 30,400 T10,800"
            fill="none"
            stroke="url(#gradient-left)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M20,0 Q70,200 40,400 T20,800"
            fill="none"
            stroke="url(#gradient-left)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
          />
          <defs>
            <linearGradient
              id="gradient-left"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(113, 113, 122, 0.4)" />{" "}
              {/* Zinc 500 */}
              <stop offset="100%" stopColor="rgba(24, 24, 27, 0.6)" />{" "}
              {/* Zinc 900 */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Side: Geometric Shapes */}
      <div className="absolute right-[-100px] top-[20%] w-[400px] h-[400px] opacity-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border border-dashed border-zinc-500 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[50px] border border-dotted border-zinc-500 rounded-full"
        />
      </div>

      <div className="absolute right-[-50px] bottom-[10%] w-[200px] h-[200px] opacity-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-2 border-dashed border-zinc-400 rounded-full"
        />
      </div>

      {/* Vertical Text Indicators */}
      <div className="absolute left-8 bottom-32 hidden xl:flex flex-col gap-8 opacity-40">
        <div className="h-20 w-[1px] bg-gradient-to-b from-transparent to-foreground/50 mx-auto" />
        <span
          className="text-xs tracking-[0.2em] transform rotate-180 uppercase"
          style={{ writingMode: "vertical-lr" }}
        >
          Scroll
        </span>
      </div>
    </div>
  );
}
