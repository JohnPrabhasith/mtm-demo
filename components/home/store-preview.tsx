"use client";

import Link from "next/link";
import { MapPinIcon } from "lucide-react";
import { DemoNotice } from "@/components/common/demo-notice";
import { Eyebrow } from "@/components/common/eyebrow";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { stores } from "@/data/stores";

export function StorePreview() {
  return (
    <Section>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            title="Store discovery"
            description="Walk in, try the fit, take it home. Locations below are labelled demonstration data."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Button
            variant="outline"
            render={<Link href="/stores" />}
            nativeButton={false}
          >
            All stores
          </Button>
        </Reveal>
      </div>
      <div className="mt-4">
        <DemoNotice>addresses and hours are placeholders</DemoNotice>
      </div>
      <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
        {stores.map((store) => (
          <StaggerItem key={store.id}>
            <article className="border bg-card p-6">
              <Eyebrow className="text-violet">Demo store</Eyebrow>
              <h3 className="mt-2 text-lg font-bold">{store.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {store.address}
              </p>
              <p className="mt-2 text-sm">{store.hours}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
