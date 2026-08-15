"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/types";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const current = product.images[active] ?? product.images[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={current}
              alt={`${product.name} image ${active + 1}`}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="image-outline object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {product.images.length > 1 ? (
        <ul className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <li key={image}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={active === index}
                className={cn(
                  "relative aspect-square w-full overflow-hidden bg-secondary ring-offset-2 transition-[box-shadow,transform] duration-150 ease-out active:scale-[0.96]",
                  active === index && "ring-2 ring-primary",
                )}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
