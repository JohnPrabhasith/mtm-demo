import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { DemoNotice } from "@/components/common/demo-notice";
import { PageHero } from "@/components/common/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { stores } from "@/data/stores";
import {
  generateGeneralWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} by WhatsApp, phone, or the preview form.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Contact"
        description="WhatsApp is the fastest path in this preview. Phone, email, and socials wait on client confirmation."
      />
      <Container className="page-y grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <DemoNotice>contact details except WhatsApp are placeholders</DemoNotice>
          <dl className="mt-6 flex flex-col gap-5 text-sm">
            <div>
              <dt className="kicker">WhatsApp</dt>
              <dd className="mt-1 text-muted-foreground">
                {site.whatsapp.display} — {site.whatsapp.label}
              </dd>
            </div>
            <div>
              <dt className="kicker">Phone</dt>
              <dd className="mt-1 text-muted-foreground">{site.phone.display}</dd>
            </div>
            <div>
              <dt className="kicker">Email</dt>
              <dd className="mt-1 text-muted-foreground">{site.email.display}</dd>
            </div>
            <div>
              <dt className="kicker">Hours</dt>
              <dd className="mt-1 text-muted-foreground">{site.hours.display}</dd>
            </div>
            <div>
              <dt className="kicker">Social</dt>
              <dd className="mt-1 text-muted-foreground">
                Instagram and Facebook: Coming soon
              </dd>
            </div>
          </dl>
          <Button
            className="mt-8"
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
          <div className="mt-10">
            <h2 className="text-lg font-bold">Demonstration stores</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {stores.map((store) => (
                <li key={store.id}>
                  {store.name} — {store.address}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactForm />
      </Container>
    </>
  );
}
