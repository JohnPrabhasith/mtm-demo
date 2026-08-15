import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { DemoNotice } from "@/components/common/demo-notice";
import { PageHero } from "@/components/common/page-hero";
import { images } from "@/data/images";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story of ${site.name} — local fashion with city energy. Placeholder brand copy pending client confirmation.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The brand"
        title="More than clothes. It's your trend."
        description={`${site.name} is a neighbourhood fashion floor with a digital storefront built to match the energy already on the racks.`}
        dark
      />
      <Container className="page-y grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden bg-secondary lg:min-h-[520px]">
          <Image
            src={images.about}
            alt="Demonstration retail photography"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="image-outline object-cover"
            priority
          />
        </div>
        <div>
          <DemoNotice>brand story awaiting client confirmation</DemoNotice>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
            Local roots. City ambition.
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-muted-foreground">
            <p>
              {site.name} is a neighbourhood fashion floor with a digital
              storefront built to match the energy already on the racks — young,
              confident, and easy to walk into.
            </p>
            <p>
              Men&apos;s shirts, tees, denim, cargos, party wear, and kids
              looks sit in the same world: contemporary Indian fashion that
              feels current without pretending to be luxury.
            </p>
            <p>
              Founder names, founding dates, store counts, and awards are not
              listed here. Those details will be published when the client
              confirms them.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
