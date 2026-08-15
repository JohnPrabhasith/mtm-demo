"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontalIcon } from "lucide-react";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { filterProducts, type SortKey } from "@/lib/catalog";
import { priceBounds } from "@/data/products";
import type { Audience, Product } from "@/data/types";

export function CatalogueView({
  products,
  audience,
}: {
  products: Product[];
  audience?: Audience;
}) {
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visible = useMemo(() => {
    return filterProducts(products, {
      audience,
      q: searchParams.get("q") ?? undefined,
      category: searchParams.get("category") ?? undefined,
      size: searchParams.get("size") ?? undefined,
      minPrice: searchParams.get("minPrice")
        ? Number(searchParams.get("minPrice"))
        : priceBounds.min,
      maxPrice: searchParams.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : priceBounds.max,
      sort: (searchParams.get("sort") as SortKey) || "newest",
    });
  }, [audience, products, searchParams]);

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <ProductFilters audience={audience} />
      </aside>
      <div>
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {visible.length} {visible.length === 1 ? "piece" : "pieces"}
          </p>
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" className="lg:hidden" />
              }
            >
              <SlidersHorizontalIcon data-icon="inline-start" />
              Filters
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Refine the floor by category, size, and price.
                </SheetDescription>
              </SheetHeader>
              <div className="overflow-y-auto px-4 pb-8">
                <ProductFilters audience={audience} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {visible.length === 0 ? (
          <Empty className="border">
            <EmptyHeader>
              <EmptyTitle>No pieces in this filter</EmptyTitle>
              <EmptyDescription>
                Clear a size or price range to see more of the floor.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <ProductGrid products={visible} />
        )}
      </div>
    </div>
  );
}
