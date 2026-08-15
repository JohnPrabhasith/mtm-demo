"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/common/brand-mark";
import { Container } from "@/components/common/container";
import { BagSheet } from "@/components/layout/bag-sheet";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SearchDialog } from "@/components/layout/search-dialog";
import { WishlistSheet } from "@/components/layout/wishlist-sheet";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { generateGeneralWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const inverted = isHome && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,color] duration-200",
        inverted
          ? "bg-gradient-to-b from-primary/80 to-transparent text-white"
          : "bg-background/95 text-foreground shadow-[0_1px_0_0_var(--border)] backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center gap-3 lg:h-[4.5rem]">
        <MobileNav inverted={inverted} />
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <BrandMark inverted={inverted} />
        </Link>
        <nav aria-label="Primary" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-7">
            {site.navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "kicker relative transition-colors duration-150",
                      "after:absolute after:inset-x-0 after:-bottom-1 after:h-[3px] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:scale-x-100",
                      inverted
                        ? active
                          ? "text-accent after:scale-x-100"
                          : "text-white/80 hover:text-white"
                        : active
                          ? "text-primary after:scale-x-100 after:bg-primary"
                          : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-0.5">
          <SearchDialog inverted={inverted} />
          <WishlistSheet inverted={inverted} />
          <BagSheet inverted={inverted} />
          <Button
            variant="highlight"
            size="sm"
            className="ml-1 hidden sm:inline-flex"
            render={
              <a
                href={getWhatsAppUrl(generateGeneralWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            WhatsApp
          </Button>
        </div>
      </Container>
    </header>
  );
}
