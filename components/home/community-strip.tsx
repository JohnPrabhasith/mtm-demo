"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "motion/react";
import { InstagramGlyph } from "@/components/common/instagram-glyph";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { site } from "@/config/site";
import { instagramPosts } from "@/data/instagram";

export function CommunityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const reduce = usePrefersReducedMotion();
  const loop = [...instagramPosts, ...instagramPosts];

  return (
    <Section>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            title="Worn in the city"
            description={`Stills from ${site.social.instagram.handle}. Tap a frame to open the reel.`}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Button
            variant="highlight"
            size="xl"
            render={
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
          >
            <InstagramGlyph data-icon="inline-start" />
            Open Instagram
          </Button>
        </Reveal>
      </div>
      {reduce ? (
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {instagramPosts.map((post) => (
            <a
              key={post.src}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[4/5] overflow-hidden bg-secondary"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="image-outline object-cover"
              />
            </a>
          ))}
        </div>
      ) : (
        <div ref={ref} className="mt-8 overflow-hidden">
          <div
            className="flex w-max gap-3 animate-marquee-slow"
            style={{ animationPlayState: inView ? "running" : "paused" }}
          >
            {loop.map((post, index) => (
              <a
                key={`${post.src}-${index}`}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[4/5] w-[42vw] shrink-0 overflow-hidden bg-secondary md:w-[22vw]"
              >
                <Image
                  src={post.src}
                  alt={index < instagramPosts.length ? post.alt : ""}
                  fill
                  sizes="(max-width: 768px) 42vw, 22vw"
                  className="image-outline object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
