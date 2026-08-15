import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { CatalogueView } from "@/components/products/catalogue-view";
import { Skeleton } from "@/components/ui/skeleton";
import { getNewArrivals } from "@/data/products";

export const metadata: Metadata = {
  title: "New Arrivals",
  description: "New arrivals from Mana Trendz Macha. Demonstration products.",
};

export default function NewArrivalsPage() {
  const products = getNewArrivals();

  return (
    <>
      <PageHero
        eyebrow="Just in"
        title="New arrivals"
        description="The newest demonstration pieces on the floor."
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
