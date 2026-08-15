import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { CatalogueView } from "@/components/products/catalogue-view";
import { Skeleton } from "@/components/ui/skeleton";
import { collections, getCollection } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";

type Params = { slug: string };

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) {
    return { title: "Collection" };
  }
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) {
    notFound();
  }
  const products = getProductsByCollection(collection.slug);

  return (
    <>
      <section className="relative min-h-[42vh] overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image
            src={collection.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/20" />
        <Container className="relative flex min-h-[42vh] flex-col justify-end pb-12 pt-24">
          <h1 className="yellow-stitch max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            {collection.name}
          </h1>
          <p className="mt-4 max-w-xl text-white/75">{collection.description}</p>
        </Container>
      </section>
      <Container className="page-y">
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <CatalogueView products={products} />
        </Suspense>
      </Container>
    </>
  );
}
