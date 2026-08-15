import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { Container } from "@/components/common/container";
import { DemoNotice } from "@/components/common/demo-notice";
import { Eyebrow } from "@/components/common/eyebrow";
import { PageHero } from "@/components/common/page-hero";
import { Button } from "@/components/ui/button";
import { stores } from "@/data/stores";
import { site } from "@/config/site";
import {
  generateStoreWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stores",
  description: `Find ${site.name} store locations. Demonstration addresses until the client confirms live stores.`,
};

export default function StoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Walk in"
        title="Stores"
        description="Try the fit on the floor. The locations below are clearly labelled demonstration records — not verified branches."
      />
      <Container className="page-y">
        <DemoNotice>do not treat these addresses as official</DemoNotice>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {stores.map((store) => (
            <li key={store.id} className="flex flex-col border bg-card p-6">
              <Eyebrow className="text-violet">Demo store</Eyebrow>
              <h2 className="mt-2 text-xl font-bold">{store.name}</h2>
              <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {store.address}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <PhoneIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {store.phoneDisplay} (demonstration)
              </p>
              <p className="mt-3 text-sm">{store.hours}</p>
              <div className="mt-6 flex flex-col gap-2">
                <Button
                  variant="highlight"
                  render={
                    <a
                      href={getWhatsAppUrl(
                        generateStoreWhatsAppMessage(store.name),
                      )}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  WhatsApp this store
                </Button>
                <Button
                  variant="outline"
                  render={
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapsQuery)}`}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  Directions
                </Button>
                <Button
                  variant="ghost"
                  render={<a href={store.phoneHref} />}
                  nativeButton={false}
                >
                  Call
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted-foreground">
          Need a different city?{" "}
          <Link href="/contact" className="underline underline-offset-4">
            Send a message
          </Link>{" "}
          and the team can confirm live locations.
        </p>
      </Container>
    </>
  );
}
