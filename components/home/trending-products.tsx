"use client";

import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ProductCard } from "@/components/products/product-card";
import { getFeaturedProducts } from "@/data/products";

export function TrendingProducts() {
  const trending = getFeaturedProducts().slice(0, 3);

  return (
    <Section>
      <Reveal>
        <SectionHeading
          title="Trending now"
          description="A tighter edit of the pieces that carry the floor."
        />
      </Reveal>
      <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
        {trending.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
