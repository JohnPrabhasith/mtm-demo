"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { site } from "@/config/site";
import { generateGeneralWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function BagSheet({ inverted = false }: { inverted?: boolean }) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Shopping bag"
            className={cn(
              inverted && "text-white hover:bg-white/10 hover:text-white",
            )}
          />
        }
      >
        <ShoppingBagIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Bag</SheetTitle>
          <SheetDescription>
            Checkout is not part of this preview.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <Empty>
            <EmptyHeader>
              <EmptyTitle>Bag coming soon</EmptyTitle>
              <EmptyDescription>
                This demonstration storefront focuses on discovery and WhatsApp
                enquiries. Online checkout, UPI, and orders are planned for a
                later phase.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button
                variant="highlight"
                render={
                  <a
                    href={getWhatsAppUrl(
                      generateGeneralWhatsAppMessage("availability in store"),
                    )}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                nativeButton={false}
              >
                Enquire on WhatsApp
              </Button>
              <Button
                variant="outline"
                render={<Link href="/stores" />}
                nativeButton={false}
              >
                Visit a store
              </Button>
            </EmptyContent>
          </Empty>
          {site.whatsapp.isDemo ? (
            <p className="mt-4 text-center text-xs text-muted-foreground">
              WhatsApp uses a demonstration number until the client confirms
              the live line.
            </p>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
