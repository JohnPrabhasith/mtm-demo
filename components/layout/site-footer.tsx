import Link from "next/link";
import { BrandMark } from "@/components/common/brand-mark";
import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { generateGeneralWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const footerNav = [
  { href: "/men", label: "Men" },
  { href: "/kids", label: "Kids" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/collections", label: "Collections" },
  { href: "/stores", label: "Stores" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandMark inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Local fashion with city energy. Shirts, denim, cargos, party wear,
            and kids looks — built for every mood.
          </p>
          <p className="mt-4 text-xs text-white/40">
            Temporary wordmark. Official logo to be supplied by the client.
          </p>
        </div>
        <div className="md:col-span-3">
          <Eyebrow className="text-accent">Shop</Eyebrow>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 transition-colors duration-150 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <Eyebrow className="text-accent">Talk to us</Eyebrow>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            <li>
              WhatsApp: {site.whatsapp.display}
              {site.whatsapp.isDemo ? " (demonstration number)" : null}
            </li>
            <li>Phone: {site.phone.display}</li>
            <li>Email: {site.email.display}</li>
            <li>Instagram: Coming soon</li>
            <li>Facebook: Coming soon</li>
          </ul>
          <Button
            className="mt-5"
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
            Enquire on WhatsApp
          </Button>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Preview storefront.</p>
          <p>Product photography is demonstration imagery, not official campaign work.</p>
        </Container>
      </div>
    </footer>
  );
}
