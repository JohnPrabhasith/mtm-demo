import type { Metadata } from "next";
import { CategoryGrid } from "@/components/home/category-grid";
import { CommunityStrip } from "@/components/home/community-strip";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { GiantWord } from "@/components/home/giant-word";
import { Hero } from "@/components/home/hero";
import { NewArrivals } from "@/components/home/new-arrivals";
import { PromoBanner } from "@/components/home/promo-banner";
import { RackTicker } from "@/components/home/rack-ticker";
import { StorePreview } from "@/components/home/store-preview";
import { TrendingProducts } from "@/components/home/trending-products";
import { TrustStrip } from "@/components/home/trust-strip";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} | Trendy Fashion for Men & Kids`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RackTicker />
      <TrustStrip />
      <CategoryGrid />
      <NewArrivals />
      <GiantWord word="MACHA" />
      <FeaturedCollection />
      <PromoBanner />
      <TrendingProducts />
      <StorePreview />
      <CommunityStrip />
    </>
  );
}
