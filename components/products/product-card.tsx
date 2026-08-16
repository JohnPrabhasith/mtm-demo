"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { HeartIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/components/providers/wishlist-provider";
import { formatInr } from "@/lib/whatsapp";
import type { Product } from "@/data/types";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { has, toggle } = useWishlist();
  const saved = has(product.id);
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
            View look
          </span>
        </Link>
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew ? (
            <Badge variant="highlight">New</Badge>
          ) : null}
          {soldOut ? <Badge variant="secondary">Out of stock</Badge> : null}
        </div>
        <Button
          type="button"
          variant="invert"
          size="icon-sm"
          aria-pressed={saved}
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          onClick={() => toggle(product)}
          className="absolute top-3 right-3 bg-void/80 text-ivory hover:bg-void"
        >
          <motion.span
            key={saved ? "saved" : "unsaved"}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0 }}
            className="flex"
          >
            <HeartIcon
              className={cn(
                "transition-[fill,color] duration-200",
                saved && "fill-gold text-gold",
              )}
              data-icon="inline-start"
            />
          </motion.span>
        </Button>
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
        <p className="mt-auto flex items-baseline gap-2 pt-1 text-[16px] font-semibold tabular-nums">
          <span>{formatInr(product.price)}</span>
          {product.compareAtPrice ? (
            <span className="text-sm font-normal text-muted-foreground line-through">
              {formatInr(product.compareAtPrice)}
            </span>
          ) : null}
        </p>
      </div>
    </article>
  );
}
