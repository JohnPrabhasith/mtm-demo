"use client";

import Image from "next/image";
import { DemoNotice } from "@/components/common/demo-notice";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { images } from "@/data/images";

export function CommunityStrip() {
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
      <Stagger className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.community.map((src, index) => (
          <StaggerItem key={src}>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={src}
                alt={`Demonstration community look ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="image-outline object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
              />
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
