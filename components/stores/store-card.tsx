import { MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Store } from "@/data/types";
import {
  generateStoreWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";

export function StoreCard({ store }: { store: Store }) {
  return (
    <article className="flex h-full flex-col border border-gold/20 bg-card p-6">
      <p className="kicker text-gold">{store.state}</p>
      <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight">
        {store.city}
      </h3>
      <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
        <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        {store.address}
      </p>
      {store.phoneDisplay && store.phoneE164 ? (
        <p className="mt-2 flex items-start gap-2 text-sm">
          <PhoneIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <a href={`tel:+${store.phoneE164}`} className="hover:underline">
            {store.phoneDisplay}
          </a>
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">
          Call details are not in the Instagram bio — use the map or Instagram.
        </p>
      )}
      <div className="mt-auto flex flex-col gap-2 pt-6">
        {store.phoneE164 ? (
          <Button
            variant="highlight"
            render={
              <a
                href={getWhatsAppUrl(
                  generateStoreWhatsAppMessage(store.city),
                  store.phoneE164,
                )}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            WhatsApp {store.city}
          </Button>
        ) : null}
        {store.mapsUrl ? (
          <Button
            variant="outline"
            render={
              <a href={store.mapsUrl} target="_blank" rel="noreferrer" />
            }
            nativeButton={false}
          >
            Directions
          </Button>
        ) : null}
        {store.phoneE164 ? (
          <Button
            variant="ghost"
            render={<a href={`tel:+${store.phoneE164}`} />}
            nativeButton={false}
          >
            Call
          </Button>
        ) : null}
      </div>
    </article>
  );
}
