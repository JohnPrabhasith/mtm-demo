import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { CollectionsGrid } from "@/components/collections/collections-grid";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Edits from Mana Trendz Macha — street, denim, party, and everyday.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Edits"
        title="Collections"
        description="Rooms from the floor. Confirm price and size in store."
        dark
      />
      <Container className="page-y">
        <CollectionsGrid />
      </Container>
    </>
  );
}
