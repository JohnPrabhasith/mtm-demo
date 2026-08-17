import { site } from "@/config/site";
import type { Product } from "@/data/types";

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: site.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export type SelectedVariant = {
  size?: string;
  color?: string;
};

export function generateWhatsAppMessage(
  product: Product,
  selectedVariant?: SelectedVariant,
) {
  const sizeBit = selectedVariant?.size
    ? ` Size ${selectedVariant.size}.`
    : " Please share today's price and sizes.";
  const colorBit = selectedVariant?.color
    ? ` Colour: ${selectedVariant.color}.`
    : "";

  return `Hi ${site.name}, I'm interested in the ${product.name}.${colorBit}${sizeBit}`;
}

export function generateStoreWhatsAppMessage(city: string) {
  return `Hi ${site.name}, I'd like to know more about the ${city} store.`;
}

export function generateGeneralWhatsAppMessage(topic = "today's collection") {
  return `Hi ${site.name}, I'd like to know more about ${topic}.`;
}

export function getWhatsAppUrl(message: string, e164 = site.whatsapp.e164) {
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}
