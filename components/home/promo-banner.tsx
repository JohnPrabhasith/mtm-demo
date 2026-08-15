"use client";

import Link from "next/link";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <Section>
      <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <SectionHeading
            title="Party ready without the costume energy."
            description="Satin, embroidery, and midnight navy — looks for dinners, receptions, and nights that run long."
          />
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Magnetic>
            <Button
              variant="highlight"
              size="xl"
              render={<Link href="/collections/party-ready" />}
              nativeButton={false}
            >
              Party ready
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              variant="outline"
              size="xl"
              render={<Link href="/men?category=party-wear" />}
              nativeButton={false}
            >
              Party wear
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </Section>
  );
}
