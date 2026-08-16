"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

const labels = [
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Cargos",
  "Party Wear",
  "Kids Wear",
  "New Arrivals",
  "Street Style",
];

export function RackTicker() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const reduce = usePrefersReducedMotion();
  const loop = [...labels, ...labels];

  return (
    <div
      ref={ref}
      className="overflow-hidden border-y border-gold/25 bg-void text-gold"
    >
      <div
        className={reduce ? "flex w-max" : "flex w-max animate-marquee"}
        style={{ animationPlayState: inView && !reduce ? "running" : "paused" }}
      >
        {loop.map((label, index) => (
          <p
            key={`${label}-${index}`}
            className="kicker flex items-center px-10 py-5 md:py-6"
          >
            {label}
            <span className="ml-10 inline-block size-1.5 rotate-45 bg-gold" aria-hidden="true" />
          </p>
        ))}
      </div>
    </div>
  );
}
