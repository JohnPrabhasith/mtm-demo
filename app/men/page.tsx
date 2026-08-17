import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { CatalogueView } from "@/components/products/catalogue-view";
import { Skeleton } from "@/components/ui/skeleton";
import { getProductsByAudience } from "@/data/products";

export const metadata: Metadata = {
  title: "Men",
  description:
    "Men's shirts, T-shirts, jeans, cargos and party wear at Mana Trendz Macha. Ask the store for today's price.",
};

export default function MenPage() {
  const products = getProductsByAudience("men");

  return (
    <>
      <PageHero
        eyebrow="Men"
        title="The men's floor"
        description="Shirts, tees, denim, cargos, and party wear. Looks to browse — price and size confirmed in store or on WhatsApp."
      />
      <Container className="page-y">
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <CatalogueView products={products} audience="men" />
        </Suspense>
      </Container>
    </>
  );
}
