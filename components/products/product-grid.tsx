"use client";

import { ProductCard } from "@/components/products/product-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/types";

export function ProductGrid({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <Stagger
      className={cn(
        "grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {products.map((product, index) => (
        <StaggerItem key={product.id}>
          <ProductCard product={product} priority={index < 4} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
