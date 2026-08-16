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
        "sticky top-0 z-40 text-foreground transition-[background-color,box-shadow] duration-200",
        scrolled
          ? "bg-background/92 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
          : "bg-gradient-to-b from-background via-background/80 to-transparent",
      )}
    >
      <Container className="flex h-[4.25rem] flex-nowrap items-center gap-3 lg:h-[4.75rem]">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <BrandMark />
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
                      "kicker relative text-muted-foreground transition-colors duration-150 hover:text-gold-bright",
                      "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:scale-x-100",
                      active && "text-gold after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-0.5 text-gold-bright">
          <SearchDialog />
          <WishlistSheet />
          <BagSheet />
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
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
