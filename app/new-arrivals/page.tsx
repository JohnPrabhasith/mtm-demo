import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { CatalogueView } from "@/components/products/catalogue-view";
import { Skeleton } from "@/components/ui/skeleton";
import { getNewArrivals } from "@/data/products";

export const metadata: Metadata = {
  title: "Looks",
  description: "New looks from Mana Trendz Macha. Ask the store for today's price.",
};

export default function NewArrivalsPage() {
  const products = getNewArrivals();

  return (
    <>
      <PageHero
        eyebrow="Just in"
        title="Looks"
        description="Pieces to browse. Price and size confirmed in store or on WhatsApp."
        dark
      />
      <Container className="page-y">
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <CatalogueView products={products} />
        </Suspense>
      </Container>
    </>
  );
}
