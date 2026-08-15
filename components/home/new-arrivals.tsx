"use client";

import Link from "next/link";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { getNewArrivals } from "@/data/products";

export function NewArrivals() {
  const arrivals = getNewArrivals().slice(0, 4);

  return (
    <Section>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
            <SectionHeading
              title="New arrivals"
              description="Fresh cuts from the latest drop. Demonstration products — replace with live stock when ready."
            />
        </Reveal>
        <Reveal delay={0.08}>
          <Button
            variant="outline"
            render={<Link href="/new-arrivals" />}
            nativeButton={false}
          >
            View all
          </Button>
        </Reveal>
      </div>
      <Stagger className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
        {arrivals.map((product, index) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} priority={index < 2} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
