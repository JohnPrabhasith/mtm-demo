"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

const ease = [0.83, 0, 0.17, 1] as const;

const looks = images.heroLooks;

export function LookSlideshow({ inView }: { inView: boolean }) {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const direction = useRef(1);

  useEffect(() => {
    if (reduce || !inView || paused) {
      return;
    }
    const id = window.setInterval(() => {
      direction.current = 1;
      setIndex((current) => (current + 1) % looks.length);
    }, 4600);
    return () => window.clearInterval(id);
  }, [inView, paused, reduce]);

  function goTo(next: number) {
    if (next === index) {
      return;
    }
    direction.current = next > index || (index === looks.length - 1 && next === 0) ? 1 : -1;
    setIndex(next);
  }

  const look = looks[index];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction.current}>
        <motion.div
          key={look.src}
          custom={direction.current}
          variants={{
            enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
            center: { x: "0%" },
            exit: (dir: number) => ({
              x: dir > 0 ? "-12%" : "12%",
              opacity: 0.4,
            }),
          }}
          initial={reduce ? false : "enter"}
          animate="center"
          exit={reduce ? undefined : "exit"}
          transition={{ duration: reduce ? 0 : 0.65, ease }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 origin-center animate-ken-burns motion-reduce:animate-none"
            style={{
              animationDelay: "0.65s",
              animationPlayState: inView && !reduce ? "running" : "paused",
            }}
          >
            <Image
              src={look.src}
              alt={look.alt}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[center_25%] opacity-80 lg:object-[center_30%] lg:opacity-100"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/62 to-void/15 lg:via-void/38 lg:to-transparent" />
      <div className="pointer-events-none absolute top-[24%] right-[9%] hidden rotate-[-12deg] border border-gold/70 px-4 py-2 font-heading text-2xl tracking-[0.28em] text-gold/85 lg:block">
        MTM
      </div>
      <div className="absolute right-6 bottom-8 z-10 flex items-center gap-3 sm:right-10 lg:right-16">
        <p className="kicker text-gold">
          {String(index + 1).padStart(2, "0")} — {String(looks.length).padStart(2, "0")}
        </p>
        <div className="flex gap-1.5" role="tablist" aria-label="Looks">
          {looks.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${item.name}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 w-6 transition-colors duration-300",
                i === index ? "bg-gold" : "bg-ivory/25 hover:bg-ivory/50",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
