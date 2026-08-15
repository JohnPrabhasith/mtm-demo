"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

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
  const reduce = useReducedMotion();
  const loop = [...labels, ...labels];

  return (
    <div
      ref={ref}
      className="overflow-hidden border-y border-primary/15 bg-primary text-accent"
    >
      <div
        className={reduce ? "flex w-max" : "flex w-max animate-marquee"}
        style={{ animationPlayState: inView && !reduce ? "running" : "paused" }}
      >
        {loop.map((label, index) => (
          <p key={`${label}-${index}`} className="kicker flex items-center px-8 py-3">
            {label}
            <span className="ml-8 inline-block h-3 w-px bg-white/25" aria-hidden="true" />
          </p>
        ))}
      </div>
    </div>
  );
}
