"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/types";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const soldOut = product.availability === "out_of_stock";
  const hoverImage = product.images[1] ?? product.images[0];

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden bg-secondary">
        <Link
          href={`/product/${product.slug}`}
          className="relative block aspect-[3/4]"
          aria-label={product.name}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            className="image-outline object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:opacity-0"
          />
          <Image
            src={hoverImage}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="image-outline object-cover scale-100 opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:opacity-100"
            aria-hidden="true"
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-0 bg-void/92 px-3 py-3 text-center text-[0.68rem] font-semibold tracking-[0.2em] text-gold uppercase transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:translate-y-full md:group-hover:translate-y-0">
            Ask in store
          </span>
        </Link>
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew ? (
            <Badge variant="highlight">New</Badge>
          ) : null}
          {soldOut ? <Badge variant="secondary">Out of stock</Badge> : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 pt-3">
        <p className="kicker text-muted-foreground">
          {product.category.replace("-", " ")}
        </p>
        <h3 className="text-[15px] font-semibold tracking-tight">
          <Link href={`/product/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-auto pt-1 text-sm text-muted-foreground">
          Price in store
        </p>
      </div>
    </article>
  );
}
