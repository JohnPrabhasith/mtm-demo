"use client";

import { Eyebrow } from "@/components/common/eyebrow";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StoreCard } from "@/components/stores/store-card";
import { stores } from "@/data/stores";

export function StorePreview() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Seven branches</Eyebrow>
        <SectionHeading
          title="Walk in. Try the fit."
          description="Phones and maps from the official Instagram bio. Hours are not listed — call before you visit."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </Section>
  );
}
