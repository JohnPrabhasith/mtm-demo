"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

export function GiantWord({ word }: { word: string }) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "10%"]);

  return (
    <div ref={ref} className="overflow-hidden border-y border-gold/20 bg-void py-4 md:py-6" aria-hidden="true">
      <motion.p
        style={{ x }}
        className="font-heading whitespace-nowrap text-[18vw] leading-[0.8] font-medium tracking-[-0.04em] text-transparent"
      >
        <span className="foil-stroke">{word}</span>
      </motion.p>
    </div>
  );
}
