import { images } from "@/data/images";
import type { Audience, Product } from "@/data/types";

const MEN_SIZES = ["S", "M", "L", "XL", "XXL"];
const KIDS_SIZES = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"];

export const products: Product[] = [
  {
    id: "p01",
    slug: "black-textured-shirt",
    name: "Black Textured Shirt",
    audience: "men",
    category: "shirts",
    collection: "new-arrivals",
    price: 1199,
    compareAtPrice: 1499,
    images: images.product.blackShirt,
    sizes: MEN_SIZES,
    colors: ["Black", "Charcoal"],
    description:
      "A black textured weave with a relaxed camp collar. Wear it open over a tee or buttoned for a cleaner line.",
    tags: ["shirt", "texture", "black", "casual"],
    isNew: true,
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p02",
    slug: "cream-knit-shirt",
    name: "Cream Knit Shirt",
    audience: "men",
    category: "shirts",
    collection: "everyday-edit",
    price: 1099,
    images: images.product.creamShirt,
    sizes: MEN_SIZES,
    colors: ["Cream", "Ivory"],
    description:
      "Soft knit with a clean placket. Light enough for Hyderabad heat, structured enough for evenings out.",
    tags: ["shirt", "knit", "cream", "everyday"],
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p03",
    slug: "oversized-graphic-tee",
    name: "Oversized Graphic Tee",
    audience: "men",
    category: "t-shirts",
    collection: "street-style",
    price: 899,
    images: images.product.graphicTee,
    sizes: MEN_SIZES,
    colors: ["Black", "White"],
    description:
      "Dropped shoulders, heavyweight cotton, and a graphic that does the talking. Pair with cargos or straight denim.",
    tags: ["tee", "graphic", "oversized", "street"],
    isNew: true,
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p04",
    slug: "blue-cargo-jeans",
    name: "Blue Cargo Jeans",
    audience: "men",
    category: "jeans",
    collection: "denim-edit",
    price: 1299,
    images: images.product.cargoJeans,
    sizes: MEN_SIZES,
    colors: ["Mid Blue"],
    description:
      "Utility pockets on a mid-blue wash. Straight through the leg so sneakers and boots both work.",
    tags: ["jeans", "cargo", "denim", "blue"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p05",
    slug: "green-stripe-shirt",
    name: "Green Stripe Shirt",
    audience: "men",
    category: "shirts",
    collection: "everyday-edit",
    price: 1149,
    images: images.product.greenShirt,
    sizes: MEN_SIZES,
    colors: ["Green Stripe"],
    description:
      "Vertical stripes in a quiet green. Tucked into jeans for class, untucked for weekends.",
    tags: ["shirt", "stripe", "green"],
    availability: "available",
  },
  {
    id: "p06",
    slug: "maroon-casual-shirt",
    name: "Maroon Casual Shirt",
    audience: "men",
    category: "shirts",
    collection: "new-arrivals",
    price: 1199,
    images: images.product.maroonShirt,
    sizes: MEN_SIZES,
    colors: ["Maroon"],
    description:
      "Deep maroon cotton with a regular collar. A colour that reads festive without going costume.",
    tags: ["shirt", "maroon", "casual"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p07",
    slug: "ivory-oxford-shirt",
    name: "Ivory Oxford Shirt",
    audience: "men",
    category: "shirts",
    collection: "everyday-edit",
    price: 1299,
    images: images.product.oxford,
    sizes: MEN_SIZES,
    colors: ["Ivory"],
    description:
      "Classic oxford cloth with a button-down collar. The shirt you keep reaching for.",
    tags: ["shirt", "oxford", "ivory", "work"],
    availability: "available",
  },
  {
    id: "p08",
    slug: "charcoal-slim-jeans",
    name: "Charcoal Slim Jeans",
    audience: "men",
    category: "jeans",
    collection: "denim-edit",
    price: 1399,
    images: images.product.charcoalJeans,
    sizes: MEN_SIZES,
    colors: ["Charcoal"],
    description:
      "Dark charcoal denim with a slim, not skinny, cut. Clean with a knit shirt or graphic tee.",
    tags: ["jeans", "slim", "charcoal"],
    availability: "available",
  },
  {
    id: "p09",
    slug: "sage-cargo-pants",
    name: "Sage Cargo Pants",
    audience: "men",
    category: "cargos",
    collection: "street-style",
    price: 1249,
    images: images.product.sageCargo,
    sizes: MEN_SIZES,
    colors: ["Sage"],
    description:
      "Sage utility pants with a tapered ankle. Built for movement, styled for the street.",
    tags: ["cargos", "sage", "utility"],
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p10",
    slug: "midnight-party-shirt",
    name: "Midnight Party Shirt",
    audience: "men",
    category: "party-wear",
    collection: "party-ready",
    price: 1499,
    images: images.product.partyShirt,
    sizes: MEN_SIZES,
    colors: ["Midnight Navy"],
    description:
      "Navy sheen with a sharper collar. Made for dinners, receptions, and late playlists.",
    tags: ["party", "navy", "shirt"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p11",
    slug: "rust-resort-shirt",
    name: "Rust Resort Shirt",
    audience: "men",
    category: "shirts",
    collection: "everyday-edit",
    price: 1099,
    images: images.product.rustShirt,
    sizes: MEN_SIZES,
    colors: ["Rust"],
    description:
      "Warm rust camp collar. Looks right with ivory trousers or light denim.",
    tags: ["shirt", "rust", "resort"],
    availability: "available",
  },
  {
    id: "p12",
    slug: "white-essential-tee",
    name: "White Essential Tee",
    audience: "men",
    category: "t-shirts",
    collection: "everyday-edit",
    price: 599,
    images: images.product.whiteTee,
    sizes: MEN_SIZES,
    colors: ["White"],
    description:
      "Heavy cotton, crew neck, no drama. The layer everything else sits on.",
    tags: ["tee", "white", "essential"],
    availability: "available",
  },
  {
    id: "p13",
    slug: "ink-logo-tee",
    name: "Ink Logo Tee",
    audience: "men",
    category: "t-shirts",
    collection: "trending-now",
    price: 799,
    images: images.product.inkTee,
    sizes: MEN_SIZES,
    colors: ["Ink", "Black"],
    description:
      "A quiet logo on ink cotton. Oversized enough to style, not so big it swims.",
    tags: ["tee", "logo", "ink"],
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p14",
    slug: "sand-oversized-tee",
    name: "Sand Oversized Tee",
    audience: "men",
    category: "t-shirts",
    collection: "street-style",
    price: 849,
    images: images.product.sandTee,
    sizes: MEN_SIZES,
    colors: ["Sand"],
    description:
      "Washed sand tone with a dropped shoulder. Pairs with olive cargos and white sneakers.",
    tags: ["tee", "sand", "oversized"],
    availability: "available",
  },
  {
    id: "p15",
    slug: "washed-blue-jeans",
    name: "Washed Blue Jeans",
    audience: "men",
    category: "jeans",
    collection: "denim-edit",
    price: 1349,
    images: images.product.washedJeans,
    sizes: MEN_SIZES,
    colors: ["Washed Blue"],
    description:
      "Light wash with a straight leg. The denim that works with almost every shirt on the floor.",
    tags: ["jeans", "wash", "blue"],
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p16",
    slug: "black-straight-jeans",
    name: "Black Straight Jeans",
    audience: "men",
    category: "jeans",
    collection: "denim-edit",
    price: 1299,
    images: images.product.blackJeans,
    sizes: MEN_SIZES,
    colors: ["Black"],
    description:
      "Straight black denim. Night-ready with a party shirt, everyday with a tee.",
    tags: ["jeans", "black", "straight"],
    availability: "available",
  },
  {
    id: "p17",
    slug: "olive-utility-cargos",
    name: "Olive Utility Cargos",
    audience: "men",
    category: "cargos",
    collection: "street-style",
    price: 1399,
    images: images.product.oliveCargo,
    sizes: MEN_SIZES,
    colors: ["Olive"],
    description:
      "Olive cargos with stacked pockets and a slightly cropped finish.",
    tags: ["cargos", "olive", "utility"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p18",
    slug: "khaki-relaxed-cargos",
    name: "Khaki Relaxed Cargos",
    audience: "men",
    category: "cargos",
    collection: "trending-now",
    price: 1299,
    images: images.product.khakiCargo,
    sizes: MEN_SIZES,
    colors: ["Khaki"],
    description:
      "Relaxed khaki with a drawcord waist. Easy through the thigh, neat at the hem.",
    tags: ["cargos", "khaki", "relaxed"],
    availability: "out_of_stock",
  },
  {
    id: "p19",
    slug: "satin-party-shirt",
    name: "Satin Party Shirt",
    audience: "men",
    category: "party-wear",
    collection: "party-ready",
    price: 1599,
    images: images.product.satinShirt,
    sizes: MEN_SIZES,
    colors: ["Black", "Wine"],
    description:
      "Soft satin with a concealed placket. Catch the light without shouting.",
    tags: ["party", "satin", "shirt"],
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p20",
    slug: "embroidered-festive-shirt",
    name: "Embroidered Festive Shirt",
    audience: "men",
    category: "party-wear",
    collection: "party-ready",
    price: 1799,
    images: images.product.festiveShirt,
    sizes: MEN_SIZES,
    colors: ["Ivory", "Gold Thread"],
    description:
      "Subtle embroidery along the placket. Festive, not costume.",
    tags: ["party", "festive", "embroidery"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p21",
    slug: "navy-knit-polo",
    name: "Navy Knit Polo",
    audience: "men",
    category: "t-shirts",
    collection: "trending-now",
    price: 999,
    images: images.product.navyPolo,
    sizes: MEN_SIZES,
    colors: ["Navy"],
    description:
      "Fine knit polo in navy. A step up from a tee without going formal.",
    tags: ["polo", "navy", "knit"],
    availability: "available",
  },
  {
    id: "p22",
    slug: "ecru-linen-blend-shirt",
    name: "Ecru Linen-Blend Shirt",
    audience: "men",
    category: "shirts",
    collection: "new-arrivals",
    price: 1399,
    images: images.product.linenShirt,
    sizes: MEN_SIZES,
    colors: ["Ecru"],
    description:
      "Linen-blend in ecru with a lived-in drape. Breathable for long days.",
    tags: ["shirt", "linen", "ecru"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p23",
    slug: "kids-stripe-polo",
    name: "Kids Stripe Polo",
    audience: "kids",
    category: "kids-wear",
    collection: "kids-edit",
    price: 699,
    images: images.product.kidsPolo,
    sizes: KIDS_SIZES,
    colors: ["Navy Stripe"],
    description:
      "Striped polo in a sturdy knit. Smart enough for family events, easy enough for school runs.",
    tags: ["kids", "polo", "stripe"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p24",
    slug: "kids-adventure-tee",
    name: "Kids Adventure Tee",
    audience: "kids",
    category: "kids-wear",
    collection: "kids-edit",
    price: 549,
    images: images.product.kidsTee,
    sizes: KIDS_SIZES,
    colors: ["White", "Yellow"],
    description:
      "Soft cotton tee with a playful graphic. Built for climbing, snacking, and repeat washes.",
    tags: ["kids", "tee", "graphic"],
    isFeatured: true,
    availability: "available",
  },
  {
    id: "p25",
    slug: "kids-denim-jacket",
    name: "Kids Denim Jacket",
    audience: "kids",
    category: "kids-wear",
    collection: "kids-edit",
    price: 999,
    images: images.product.kidsDenim,
    sizes: KIDS_SIZES,
    colors: ["Light Wash"],
    description:
      "A light-wash denim jacket that layers over tees and party sets alike.",
    tags: ["kids", "denim", "jacket"],
    availability: "available",
  },
  {
    id: "p26",
    slug: "kids-party-set",
    name: "Kids Party Set",
    audience: "kids",
    category: "kids-wear",
    collection: "party-ready",
    price: 1299,
    images: images.product.kidsParty,
    sizes: KIDS_SIZES,
    colors: ["Ivory", "Navy"],
    description:
      "A two-piece set for birthdays and family functions. Comfort first, camera-ready second.",
    tags: ["kids", "party", "set"],
    isNew: true,
    availability: "available",
  },
  {
    id: "p27",
    slug: "kids-cargo-shorts",
    name: "Kids Cargo Shorts",
    audience: "kids",
    category: "kids-wear",
    collection: "kids-edit",
    price: 799,
    images: images.product.kidsShorts,
    sizes: KIDS_SIZES,
    colors: ["Khaki", "Olive"],
    description:
      "Pocketed cargo shorts with an elastic waist. Made for movement.",
    tags: ["kids", "cargos", "shorts"],
    availability: "out_of_stock",
  },
  {
    id: "p28",
    slug: "kids-check-shirt",
    name: "Kids Check Shirt",
    audience: "kids",
    category: "kids-wear",
    collection: "everyday-edit",
    price: 749,
    images: images.product.kidsCheck,
    sizes: KIDS_SIZES,
    colors: ["Blue Check"],
    description:
      "A classic check shirt in a soft cotton. Rolls up easily when the day gets warm.",
    tags: ["kids", "shirt", "check"],
    availability: "available",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByAudience(audience: Audience) {
  return products.filter((product) => product.audience === audience);
}

export function getNewArrivals() {
  return products.filter((product) => product.isNew);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.isFeatured);
}

export function getProductsByCollection(slug: string) {
  if (slug === "new-arrivals") {
    return getNewArrivals();
  }
  return products.filter((product) => product.collection === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (item) =>
        item.id !== product.id &&
        (item.category === product.category ||
          item.collection === product.collection),
    )
    .slice(0, limit);
}

export const priceBounds = products.reduce(
  (bounds, product) => ({
    min: Math.min(bounds.min, product.price),
    max: Math.max(bounds.max, product.price),
  }),
  { min: Number.POSITIVE_INFINITY, max: 0 },
);
