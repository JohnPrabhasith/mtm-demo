"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export function FeaturedCollection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-9%", "9%"]);

  return (
    <section ref={ref} className="bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[460px] overflow-hidden lg:min-h-[720px]">
          <motion.div className="absolute inset-[-12%]" style={{ y }}>
            <Image
              src={images.featured.street}
              alt="Demonstration street-style menswear photography"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20">
          <h2 className="yellow-stitch text-4xl font-extrabold tracking-tight sm:text-6xl">
            Street Style
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Oversized tees, cargos, and denim with city posture. A collection
            for the commute, the campus, and after hours.
          </p>
          <div className="mt-9">
            <Magnetic>
              <Button
                variant="highlight"
                size="xl"
                className="button-shine"
                render={<Link href="/collections/street-style" />}
                nativeButton={false}
              >
                Enter the edit
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
