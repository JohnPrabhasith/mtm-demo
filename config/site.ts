import { defaultStore } from "@/data/stores";

export const site = {
  name: "Mana Trendz Macha",
  shortName: "MTM",
  tagline: "Style that speaks you.",
  description:
    "Men's wear from Mana Trendz Macha. Walk into a branch or WhatsApp the floor — shirts, tees, denim, cargos, and party wear.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en-IN",
  currency: "INR",
  defaultLocation: "Kukatpally, Hyderabad",
  phone: {
    display: defaultStore.phoneDisplay!,
    href: `tel:+${defaultStore.phoneE164}`,
  },
  email: {
    display: null as string | null,
    href: null as string | null,
  },
  whatsapp: {
    e164:
      process.env.NEXT_PUBLIC_WHATSAPP_E164 &&
      process.env.NEXT_PUBLIC_WHATSAPP_E164 !== "919000000000"
        ? process.env.NEXT_PUBLIC_WHATSAPP_E164
        : defaultStore.phoneE164!,
    display: defaultStore.phoneDisplay!,
    isDemo: false,
    label: "Kukatpally",
  },
  social: {
    instagram: {
      href: "https://www.instagram.com/mana_trendz_macha/",
      handle: "@mana_trendz_macha",
    },
    facebook: null as string | null,
  },
  hours: {
    display: "Ask the branch",
    note: "Opening hours are not listed on Instagram. Call or message the store before you visit.",
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/men", label: "Men" },
    { href: "/stores", label: "Stores" },
    { href: "/new-arrivals", label: "Looks" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof site;
