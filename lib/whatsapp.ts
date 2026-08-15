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
  const price = formatInr(product.price);
  const sizeBit = selectedVariant?.size
    ? ` I would like to know the availability for Size ${selectedVariant.size}.`
    : " I would like to know the availability.";
  const colorBit = selectedVariant?.color
    ? ` Colour: ${selectedVariant.color}.`
    : "";

  return `Hi ${site.name}, I'm interested in the ${product.name} priced at ${price}.${colorBit}${sizeBit}`;
}

export function generateStoreWhatsAppMessage(storeName: string) {
  return `Hi ${site.name}, I'd like to know more about visiting ${storeName}.`;
}

export function generateGeneralWhatsAppMessage(topic = "your latest collection") {
  return `Hi ${site.name}, I'd like to know more about ${topic}.`;
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(message)}`;
}
