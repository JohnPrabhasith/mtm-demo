import type { Metadata } from "next";
import { CategoryGrid } from "@/components/home/category-grid";
import { CommunityStrip } from "@/components/home/community-strip";
import { Hero } from "@/components/home/hero";
import { RackTicker } from "@/components/home/rack-ticker";
import { StorePreview } from "@/components/home/store-preview";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} | Men's wear in Telangana & Andhra`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RackTicker />
      <CategoryGrid />
      <StorePreview />
      <CommunityStrip />
    </>
  );
}
