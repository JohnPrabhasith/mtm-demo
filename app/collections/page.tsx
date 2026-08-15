import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { CollectionsGrid } from "@/components/collections/collections-grid";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Editorial edits from Mana Trendz Macha — street, denim, party, everyday, and kids.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Edits"
        title="Collections"
        description="Visual rooms, not just another grid. Each edit is a point of view."
        dark
      />
      <Container className="page-y">
        <CollectionsGrid />
      </Container>
    </>
  );
}
