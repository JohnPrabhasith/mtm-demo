"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/common/brand-mark";
import { site } from "@/config/site";
import { generateGeneralWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function MobileNav({ inverted = false }: { inverted?: boolean }) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className={cn(
              "lg:hidden",
              inverted && "text-white hover:bg-white/10 hover:text-white",
            )}
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full max-w-none bg-primary text-primary-foreground sm:max-w-sm"
      >
        <SheetHeader>
          <SheetTitle className="text-primary-foreground">
            <BrandMark inverted />
          </SheetTitle>
          <SheetDescription className="text-white/60">
            Shop the floor
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-1 flex-col px-4">
          <ul className="flex flex-col gap-1">
            {site.navigation.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li
                  key={item.href}
                  className="animate-fade-up motion-reduce:animate-none"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <SheetClose
                    render={
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-3 text-2xl font-extrabold tracking-tight",
                          active ? "text-accent" : "text-white",
                        )}
                      />
                    }
                    nativeButton={false}
                  >
                    {item.label}
                  </SheetClose>
                </li>
              );
            })}
            <li>
              <SheetClose
                render={
                  <Link
                    href="/stores"
                    className="block py-3 text-2xl font-extrabold tracking-tight text-white"
                  />
                }
                nativeButton={false}
              >
                Stores
              </SheetClose>
            </li>
          </ul>
          <div className="mt-auto flex flex-col gap-3 py-6">
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
              WhatsApp
            </Button>
            <p className="text-xs text-white/50">
              Temporary wordmark. Official logo to be supplied by the client.
            </p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
