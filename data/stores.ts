import type { Store } from "@/data/types";

function branch(
  city: string,
  state: Store["state"],
  address: string,
  phoneDigits: string | null,
  mapsUrl: string | null,
): Store {
  return {
    id: city.toLowerCase().replace(/\s+/g, "-"),
    city,
    state,
    address,
    phoneDigits,
    phoneDisplay: phoneDigits ? formatInDisplay(phoneDigits) : null,
    phoneE164: phoneDigits ? `91${phoneDigits}` : null,
    mapsUrl,
  };
}

function formatInDisplay(digits: string) {
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
}

/**
 * Branches published on https://www.instagram.com/mana_trendz_macha/
 * Phones from the bio. Map URLs from the bio location links.
 * Do not invent hours, WhatsApp-only numbers, or street lines that are not on those links.
 */
export const stores: Store[] = [
  branch(
    "Wanaparthy",
    "Telangana",
    "Wanaparthy, Telangana",
    "8074073077",
    null,
  ),
  branch(
    "Kurnool",
    "Andhra Pradesh",
    "Shop No. 6A, B.V. Regent Plaza, Kallur Rd, near RTC Bus Stand, Sampath Nagar, Kurnool, Andhra Pradesh 518003",
    "9390344065",
    "https://maps.app.goo.gl/6eQceQBvDZDxdhMK9?g_st=ic",
  ),
  branch(
    "Nandyal",
    "Andhra Pradesh",
    "Nandyal, Andhra Pradesh",
    "8019896767",
    null,
  ),
  branch(
    "Kukatpally",
    "Telangana",
    "Kukatpally, Hyderabad, Telangana",
    "8897023553",
    "https://maps.app.goo.gl/yk2prcafvZPGYGHaA?g_st=ic",
  ),
  branch(
    "Sangareddy",
    "Telangana",
    "Fastrack Lane, PNR Colony, Vidya Nagar Colony, Sangareddy, Telangana 502001",
    "8688730891",
    "https://maps.app.goo.gl/GNmSS8UEjPnzcnyH6?g_st=ic",
  ),
  branch(
    "Nizamabad",
    "Telangana",
    "Temple Road, Vinayak Nagar, Nizamabad, Telangana 503003",
    "8247018912",
    "https://maps.app.goo.gl/gg8a9pbbS5FG7ReK9",
  ),
  branch(
    "Siddipet",
    "Telangana",
    "Siddipet Bus Stand Road, Housing Board Colony, Siddipet, Telangana 502103",
    null,
    "https://maps.app.goo.gl/nKTxPycKR1K4LY8A7?g_st=ic",
  ),
];

export const defaultStore = stores.find((store) => store.id === "kukatpally")!;
