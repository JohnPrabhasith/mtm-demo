export const site = {
  name: "Mana Trendz Macha",
  shortName: "MTM",
  tagline: "Style that speaks you.",
  description:
    "Discover trendy men's and kids' fashion at Mana Trendz Macha. Explore shirts, T-shirts, jeans, casualwear, partywear and the latest arrivals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en-IN",
  currency: "INR",
  defaultLocation: "Hyderabad",
  phone: {
    display: "Client information required",
    href: null as string | null,
  },
  email: {
    display: "Client information required",
    href: null as string | null,
  },
  whatsapp: {
    e164: process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "919000000000",
    display: "+91 90000 00000",
    isDemo: true,
    label: "Demonstration number",
  },
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
  hours: {
    display: "Client information required",
    note: "Ask the store for confirmed opening hours.",
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/men", label: "Men" },
    { href: "/kids", label: "Kids" },
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof site;
