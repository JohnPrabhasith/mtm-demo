import { images } from "@/data/images";
import type { Category } from "@/data/types";

export const categories: Category[] = [
  {
    slug: "shirts",
    name: "Shirts",
    href: "/men?category=shirts",
    audience: "men",
    image: images.categories.shirts,
    description: "Textures, stripes, and everyday collars.",
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    href: "/men?category=t-shirts",
    audience: "men",
    image: images.categories.tees,
    description: "Oversized graphics and clean essentials.",
  },
  {
    slug: "jeans",
    name: "Jeans",
    href: "/men?category=jeans",
    audience: "men",
    image: images.categories.jeans,
    description: "Washes built for daily wear.",
  },
  {
    slug: "cargos",
    name: "Cargos",
    href: "/men?category=cargos",
    audience: "men",
    image: images.categories.cargos,
    description: "Utility fits with street ease.",
  },
  {
    slug: "party-wear",
    name: "Party Wear",
    href: "/men?category=party-wear",
    audience: "men",
    image: images.categories.party,
    description: "Night-ready shirts and sharper cuts.",
  },
  {
    slug: "kids-wear",
    name: "Kids Wear",
    href: "/kids",
    audience: "kids",
    image: images.categories.kids,
    description: "Play-ready pieces with grown-up attitude.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
