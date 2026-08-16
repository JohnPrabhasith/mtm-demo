"use client";

import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { Container } from "@/components/common/container";
import { FoilMark } from "@/components/common/foil-mark";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  const reduce = usePrefersReducedMotion();

  return (
    <section className="border-b border-gold/20 bg-void py-14 text-ivory md:py-20">
      <Container>
        <motion.h1
          initial={reduce ? false : { y: 24, opacity: 0, clipPath: "inset(18% 0 0 0)" }}
          animate={{ y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.65, ease }}
          className="gold-rule max-w-3xl font-heading text-4xl font-medium tracking-[-0.03em] text-balance sm:text-5xl"
        >
          {title}
        </motion.h1>
        <FoilMark className="mt-5" />
        {description ? (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease }}
            className={cn("mt-4 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base")}
          >
            {description}
          </motion.p>
        ) : null}
      </Container>
    </section>
  );
}
