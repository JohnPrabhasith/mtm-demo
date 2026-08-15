import type { Audience, Product } from "@/data/types";

export type SortKey = "newest" | "price-asc" | "price-desc" | "name";

export type CatalogQuery = {
  q?: string;
  category?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: SortKey;
  audience?: Audience;
};

function matchesQuery(product: Product, q: string) {
  const haystack = [
    product.name,
    product.category,
    product.collection,
    product.description,
    ...product.tags,
    ...product.colors,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q.toLowerCase().trim());
}

export function filterProducts(products: Product[], query: CatalogQuery) {
  const filtered = products.filter((product) => {
    if (query.audience && product.audience !== query.audience) {
      return false;
    }
    if (query.category && product.category !== query.category) {
      return false;
    }
    if (query.size && !product.sizes.includes(query.size)) {
      return false;
    }
    if (query.minPrice !== undefined && product.price < query.minPrice) {
      return false;
    }
    if (query.maxPrice !== undefined && product.price > query.maxPrice) {
      return false;
    }
    if (query.q && !matchesQuery(product, query.q)) {
      return false;
    }
    return true;
  });

  const sorted = [...filtered];
  switch (query.sort) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  }

  return sorted;
}

export function searchProducts(products: Product[], q: string) {
  if (!q.trim()) {
    return [];
  }
  return filterProducts(products, { q, sort: "name" }).slice(0, 8);
}

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to high" },
  { value: "price-desc", label: "Price: High to low" },
  { value: "name", label: "Name" },
];
