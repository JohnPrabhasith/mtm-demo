import Link from "next/link";
import { BrandMark } from "@/components/common/brand-mark";
import { Container } from "@/components/common/container";
import { FoilMark } from "@/components/common/foil-mark";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { stores } from "@/data/stores";
import { generateGeneralWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const footerNav = [
  { href: "/men", label: "Men" },
  { href: "/stores", label: "Stores" },
  { href: "/new-arrivals", label: "Looks" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gold/25 bg-void text-ivory">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandMark />
          <FoilMark className="mt-5" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
            Neighbourhood men&apos;s wear. Shirts, denim, cargos, and party
            wear — try it on the floor.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-heading text-xl text-gold">Shop</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ivory/80 transition-colors duration-150 hover:text-gold-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-heading text-xl text-gold">Talk to us</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-ivory/80">
            <li>
              WhatsApp ({site.whatsapp.label}): {site.whatsapp.display}
            </li>
            <li>
              {stores.length} branches across Telangana and Andhra
            </li>
            <li>
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/80 transition-colors duration-150 hover:text-gold-bright"
              >
                Instagram: {site.social.instagram.handle}
              </a>
            </li>
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
      <div className="border-t border-gold/15">
        <Container className="flex flex-col gap-2 py-4 text-xs text-ivory/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}.</p>
          <p>Price and size confirmed in store or on WhatsApp.</p>
        </Container>
      </div>
    </footer>
  );
}
