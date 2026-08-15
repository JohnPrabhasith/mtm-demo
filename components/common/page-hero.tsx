"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  title,
  description,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      className={cn(
        "border-b py-14 md:py-20",
        dark ? "bg-primary text-primary-foreground" : "bg-background",
      )}
    >
      <Container>
        <motion.h1
          initial={reduce ? false : { y: 24, opacity: 0, clipPath: "inset(18% 0 0 0)" }}
          animate={{ y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.65, ease }}
          className={cn(
            "yellow-stitch max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl",
          )}
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease }}
            className={cn(
              "mt-4 max-w-xl text-sm leading-relaxed sm:text-base",
              dark ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {description}
          </motion.p>
        ) : null}
      </Container>
    </section>
  );
}
