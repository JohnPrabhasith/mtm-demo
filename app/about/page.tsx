import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { InstagramCta } from "@/components/common/instagram-cta";
import { PageHero } from "@/components/common/page-hero";
import { instagramPosts } from "@/data/instagram";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is neighbourhood men's wear across Telangana and Andhra. Walk in or WhatsApp a branch.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The brand"
        title="More than clothes. It's your trend."
        description={`${site.name} is a neighbourhood fashion floor. Conversion is WhatsApp and walk-in — not a cart.`}
        dark
      />
      <Container className="page-y grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden bg-secondary lg:min-h-[520px]">
          <Image
            src={instagramPosts[4].src}
            alt={instagramPosts[4].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="image-outline object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-medium tracking-[-0.03em]">
            Local floors. City energy.
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-muted-foreground">
            <p>
              {site.name} sells men&apos;s shirts, tees, denim, cargos, and
              party wear across Telangana and Andhra. Try the fit in store.
            </p>
            <p>
              Branches listed on this site come from the official Instagram
              bio. Hours are not published there — call or message before you
              visit.
            </p>
            <p>
              Founder names, founding dates, and awards are not listed. Live
              drops stay on Instagram.
            </p>
          </div>
          <div className="mt-8">
            <InstagramCta />
          </div>
        </div>
      </Container>
    </>
  );
}
