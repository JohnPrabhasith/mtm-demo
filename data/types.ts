export type Audience = "men" | "kids";

export type Availability = "available" | "out_of_stock";

export type Product = {
  id: string;
  slug: string;
  name: string;
  audience: Audience;
  category: string;
  collection: string;
  price: number;
  compareAtPrice?: number;
  images: readonly string[];
  sizes: string[];
  colors: string[];
  description: string;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  availability: Availability;
};

export type Category = {
  slug: string;
  name: string;
  href: string;
  audience: Audience | "all";
  image: string;
  description: string;
};

export type Collection = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  href: string;
};

export type Store = {
  id: string;
  city: string;
  state: "Telangana" | "Andhra Pradesh";
  address: string;
  /** 10-digit Indian mobile from the Instagram bio, or null if only a map was listed. */
  phoneDigits: string | null;
  phoneDisplay: string | null;
  phoneE164: string | null;
  mapsUrl: string | null;
};
