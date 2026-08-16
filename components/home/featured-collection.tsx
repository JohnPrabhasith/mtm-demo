"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { Container } from "@/components/common/container";
import { FoilMark } from "@/components/common/foil-mark";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export function FeaturedCollection() {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-9%", "9%"]);

  const glide = [0.83, 0, 0.17, 1] as const;

  return (
    <section ref={ref} className="bg-void text-ivory">
      <Container className="py-0">
        <div className="grid overflow-hidden lg:grid-cols-2">
          <motion.div
            className="relative min-h-[460px] overflow-hidden lg:min-h-[720px]"
            initial={reduce ? false : { x: "-10%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: glide }}
          >
            <motion.div className="absolute inset-[-12%]" style={{ y }}>
              <Image
                src={images.featured.street}
                alt="Demonstration street-style menswear photography"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute top-8 left-8 rotate-[-12deg] border border-gold/70 px-3 py-1.5 font-heading text-lg tracking-[0.28em] text-gold/90">
              MTM
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16"
            initial={reduce ? false : { x: "8%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.08, ease: glide }}
          >
            <h2 className="gold-rule font-heading text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
              Street Style
            </h2>
            <FoilMark className="mt-6" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">
              Oversized tees, cargos, and denim with city posture. A collection
              for the commute, the campus, and after hours.
            </p>
            <div className="mt-9">
              <Magnetic>
                <Button
                  variant="highlight"
                  size="xl"
                  render={<Link href="/collections/street-style" />}
                  nativeButton={false}
                >
                  Enter the edit
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
