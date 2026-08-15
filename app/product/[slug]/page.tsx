import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductInfo } from "@/components/products/product-info";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { site } from "@/config/site";
import { formatInr } from "@/lib/whatsapp";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product" };
  }
  return {
    title: product.name,
    description: `${product.name} — ${formatInr(product.price)}. ${product.description}`,
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  const related = getRelatedProducts(product);

  return (
    <Container className="page-y">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
      {related.length > 0 ? (
        <section className="mt-20">
          <SectionHeading eyebrow="Keep looking" title="Related pieces" />
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </Container>
  );
}
