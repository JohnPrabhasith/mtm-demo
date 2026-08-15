"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollThread() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  if (reduce) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 hidden h-dvh w-[3px] origin-top bg-accent md:block"
      style={{ scaleY }}
    />
  );
}
