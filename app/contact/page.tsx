import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { StoreCard } from "@/components/stores/store-card";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { stores } from "@/data/stores";
import {
  generateGeneralWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: `WhatsApp or call ${site.name}. Kukatpally ${site.whatsapp.display}. All branch numbers are on the stores page.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Contact"
        description="WhatsApp the Kukatpally line, or call the branch you want to visit. There is no checkout and no contact form that goes nowhere."
      />
      <Container className="page-y">
        <dl className="grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="kicker">WhatsApp</dt>
            <dd className="mt-1 text-muted-foreground">
              {site.whatsapp.display} — {site.whatsapp.label}
            </dd>
          </div>
          <div>
            <dt className="kicker">Call</dt>
            <dd className="mt-1">
              <a href={site.phone.href} className="text-gold-bright hover:underline">
                {site.phone.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="kicker">Hours</dt>
            <dd className="mt-1 text-muted-foreground">{site.hours.note}</dd>
          </div>
          <div>
            <dt className="kicker">Instagram</dt>
            <dd className="mt-1">
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-bright underline-offset-4 hover:underline"
              >
                {site.social.instagram.handle}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="highlight"
            size="xl"
            render={
              <a
                href={getWhatsAppUrl(generateGeneralWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            Open WhatsApp
          </Button>
          <Button
            variant="outline"
            size="xl"
            render={
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
          >
            Open Instagram
          </Button>
        </div>
        <h2 className="mt-14 font-heading text-3xl font-medium tracking-tight">
          Every branch
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <li key={store.id} className="flex">
              <StoreCard store={store} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
