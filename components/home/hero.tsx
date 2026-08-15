"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

const ease = [0.16, 1, 0.3, 1] as const;

const words = [
  ["Style", "that"],
  ["speaks", "you."],
];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });

  return (
    <section
      ref={sectionRef}
      className="relative -mt-16 min-h-[88vh] overflow-hidden bg-primary text-primary-foreground lg:-mt-[4.5rem] lg:min-h-[94vh]"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { clipPath: "inset(0 49% 0 49%)" }}
        animate={{ clipPath: "inset(0 0% 0 0%)" }}
        transition={{ duration: 1.15, ease }}
      >
        <div
          className="absolute inset-0 origin-center animate-ken-burns motion-reduce:animate-none"
          style={{ animationPlayState: inView ? "running" : "paused" }}
        >
          <Image
            src={images.hero.primary}
            alt="Demonstration fashion photography of contemporary menswear"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[center_20%] opacity-55 lg:opacity-100 lg:object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/88 to-primary/25 lg:via-primary/70 lg:to-transparent" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[94vh] lg:justify-center lg:px-12 lg:pb-24">
        <div className="max-w-xl">
          <motion.p
            className="max-w-sm text-sm text-accent sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
          >
            New season. New you.
          </motion.p>
          <h1 className="yellow-stitch mt-5 font-heading text-[2.7rem] leading-[0.92] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[5.4rem]">
            {words.map((line, lineIndex) => (
              <span key={line.join("-")} className="block overflow-hidden">
                {line.map((word, wordIndex) => (
                  <span key={word} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                      className={
                        word === "you."
                          ? "inline-block text-accent"
                          : "inline-block"
                      }
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.35 + lineIndex * 0.12 + wordIndex * 0.08,
                        ease,
                      }}
                    >
                      {word}
                      {wordIndex < line.length - 1 ? "\u00A0" : null}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease }}
          >
            Premium fits. Latest trends.
            <br />
            Made for every mood.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.98, ease }}
          >
            <Magnetic>
              <Button
                variant="highlight"
                size="xl"
                className="button-shine"
                render={<Link href="/men" />}
                nativeButton={false}
              >
                Shop men
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                variant="onDark"
                size="xl"
                render={<Link href="/kids" />}
                nativeButton={false}
              >
                Shop kids
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
