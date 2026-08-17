import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { InstagramCta } from "@/components/common/instagram-cta";
import { PageHero } from "@/components/common/page-hero";
import { StoreCard } from "@/components/stores/store-card";
import { stores } from "@/data/stores";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Stores",
  description: `Find ${site.name} in Wanaparthy, Kurnool, Nandyal, Kukatpally, Sangareddy, Nizamabad, and Siddipet. Call or WhatsApp the branch.`,
};

export default function StoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Walk in"
        title="Stores"
        description="Seven branches across Telangana and Andhra. Phones and maps from Instagram. Ask the branch for hours."
      />
      <Container className="page-y">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <li key={store.id} className="flex">
              <StoreCard store={store} />
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <InstagramCta />
        </div>
      </Container>
    </>
  );
}
