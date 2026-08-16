"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "motion/react";
import { DemoNotice } from "@/components/common/demo-notice";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { images } from "@/data/images";

export function CommunityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const reduce = usePrefersReducedMotion();
  const loop = [...images.community, ...images.community];

  return (
    <Section>
      <Reveal>
        <SectionHeading
          title="Worn in the city"
          description="A lookbook moodboard. Official social channels will replace these demonstration frames."
        />
      </Reveal>
      <div className="mt-4">
        <DemoNotice>photography is stock, not customer content</DemoNotice>
      </div>
      {reduce ? (
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.community.map((src, index) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={src}
                alt={`Demonstration community look ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="image-outline object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div ref={ref} className="mt-8 overflow-hidden">
          <div
            className="flex w-max gap-3 animate-marquee-slow"
            style={{ animationPlayState: inView ? "running" : "paused" }}
          >
            {loop.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[4/5] w-[42vw] shrink-0 overflow-hidden bg-secondary md:w-[22vw]"
              >
                <Image
                  src={src}
                  alt={
                    index < images.community.length
                      ? `Demonstration community look ${index + 1}`
                      : ""
                  }
                  fill
                  sizes="(max-width: 768px) 42vw, 22vw"
                  className="image-outline object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
