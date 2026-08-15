"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { useWishlist } from "@/components/providers/wishlist-provider";
import { formatInr } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function WishlistSheet({ inverted = false }: { inverted?: boolean }) {
  const { products, toggle } = useWishlist();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Wishlist, ${products.length} saved`}
            className={cn(
              inverted && "text-white hover:bg-white/10 hover:text-white",
            )}
          />
        }
      >
        <span className="relative">
          <HeartIcon />
          {products.length > 0 ? (
            <span className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-accent text-[0.55rem] font-bold text-accent-foreground">
              {products.length}
            </span>
          ) : null}
        </span>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Wishlist</SheetTitle>
          <SheetDescription>
            Saved looks. Enquire on WhatsApp from the product page.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 pb-6">
          {products.length === 0 ? (
            <Empty>
              <EmptyHeader>
                <EmptyTitle>Nothing saved yet</EmptyTitle>
                <EmptyDescription>
                  Tap the heart on a product to keep it here.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button render={<Link href="/men" />} nativeButton={false}>
                  Shop men
                </Button>
              </EmptyContent>
            </Empty>
          ) : (
            products.map((product) => (
              <article key={product.id} className="flex gap-3 border-b pb-3">
                <Link
                  href={`/product/${product.slug}`}
                  className="relative size-20 shrink-0 overflow-hidden bg-secondary"
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/product/${product.slug}`}
                    className="block truncate text-sm font-semibold"
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm tabular-nums">{formatInr(product.price)}</p>
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto px-0"
                    onClick={() => toggle(product)}
                  >
                    Remove
                  </Button>
                </div>
              </article>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
