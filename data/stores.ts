import type { Store } from "@/data/types";

/**
 * Demonstration store records only.
 * Do not treat these as verified Mana Trendz Macha locations.
 */
export const stores: Store[] = [
  {
    id: "demo-banjara",
    name: "Mana Trendz Macha — Banjara Hills",
    isDemo: true,
    address: "Road No. 12, Banjara Hills (demonstration address)",
    city: "Hyderabad",
    phoneDisplay: "+91 90000 00000",
    phoneHref: "tel:+919000000000",
    hours: "Hours to be confirmed by the store",
    mapsQuery: "Banjara Hills Hyderabad",
  },
  {
    id: "demo-secunderabad",
    name: "Mana Trendz Macha — Secunderabad",
    isDemo: true,
    address: "SD Road, Secunderabad (demonstration address)",
    city: "Secunderabad",
    phoneDisplay: "+91 90000 00000",
    phoneHref: "tel:+919000000000",
    hours: "Hours to be confirmed by the store",
    mapsQuery: "SD Road Secunderabad",
  },
  {
    id: "demo-kukatpally",
    name: "Mana Trendz Macha — Kukatpally",
    isDemo: true,
    address: "KPHB Main Road (demonstration address)",
    city: "Hyderabad",
    phoneDisplay: "+91 90000 00000",
    phoneHref: "tel:+919000000000",
    hours: "Hours to be confirmed by the store",
    mapsQuery: "KPHB Hyderabad",
  },
];
