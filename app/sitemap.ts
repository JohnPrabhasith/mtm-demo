import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { collections } from "@/data/collections";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/men",
    "/kids",
    "/collections",
    "/new-arrivals",
    "/stores",
    "/about",
    "/contact",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })),
    ...collections.map((collection) => ({
      url: `${site.url}${collection.href}`,
      lastModified: new Date(),
    })),
    ...products.map((product) => ({
      url: `${site.url}/product/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
