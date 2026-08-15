import { images } from "@/data/images";
import type { Collection } from "@/data/types";

export const collections: Collection[] = [
  {
    slug: "new-arrivals",
    name: "New Arrivals",
    eyebrow: "Just in",
    description: "The newest drops from the floor, styled for now.",
    image: images.hero.secondary,
    href: "/new-arrivals",
  },
  {
    slug: "trending-now",
    name: "Trending Now",
    eyebrow: "On repeat",
    description: "The pieces people keep coming back to.",
    image: images.community[0],
    href: "/collections/trending-now",
  },
  {
    slug: "everyday-edit",
    name: "Everyday Edit",
    eyebrow: "Weekday uniform",
    description: "Easy shirts and denim for work, college, and everything between.",
    image: images.categories.shirts,
    href: "/collections/everyday-edit",
  },
  {
    slug: "street-style",
    name: "Street Style",
    eyebrow: "City cut",
    description: "Oversized tees, cargos, and attitude that travels.",
    image: images.featured.street,
    href: "/collections/street-style",
  },
  {
    slug: "party-ready",
    name: "Party Ready",
    eyebrow: "After dark",
    description: "Satin, embroidery, and sharper nights.",
    image: images.featured.party,
    href: "/collections/party-ready",
  },
  {
    slug: "denim-edit",
    name: "Denim Edit",
    eyebrow: "Indigo hours",
    description: "Washes, straight cuts, and cargo jeans.",
    image: images.categories.jeans,
    href: "/collections/denim-edit",
  },
  {
    slug: "kids-edit",
    name: "Kids Edit",
    eyebrow: "Little trendz",
    description: "Mini fits with the same energy as the men's floor.",
    image: images.featured.kids,
    href: "/collections/kids-edit",
  },
];

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}
