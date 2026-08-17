import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { CatalogueView } from "@/components/products/catalogue-view";
import { Skeleton } from "@/components/ui/skeleton";
import { getProductsByAudience } from "@/data/products";

export const metadata: Metadata = {
  title: "Kids",
  description: "Kids wear at Mana Trendz Macha — confirm stock at the branch.",
};

export default function KidsPage() {
  const products = getProductsByAudience("kids");

  return (
    <>
      <PageHero
        eyebrow="Kids"
        title="Little trendz"
        description="Mini fits if the floor has them. Confirm stock and price at the branch."
      />
      <Container className="page-y">
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <CatalogueView products={products} audience="kids" />
        </Suspense>
      </Container>
    </>
  );
}
