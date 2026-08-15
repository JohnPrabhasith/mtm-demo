"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptionSelector } from "@/components/products/option-selector";
import { useWishlist } from "@/components/providers/wishlist-provider";
import {
  formatInr,
  generateWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";
import { site } from "@/config/site";
import type { Product } from "@/data/types";
import { Magnetic } from "@/components/motion/magnetic";
import { HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductInfo({ product }: { product: Product }) {
  const { has, toggle } = useWishlist();
  const saved = has(product.id);
  const soldOut = product.availability === "out_of_stock";
  const [size, setSize] = useState<string>();
  const [color, setColor] = useState<string>(product.colors[0]);
  const [error, setError] = useState<string>();

  const whatsappHref = getWhatsAppUrl(
    generateWhatsAppMessage(product, { size, color }),
  );

  function onEnquire() {
    if (!size) {
      setError("Select a size before sending the enquiry.");
      return;
    }
    setError(undefined);
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="kicker text-violet">
          {product.category.replace("-", " ")}
        </p>
        <h1 className="yellow-stitch mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {product.name}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-2xl font-semibold tabular-nums">
            {formatInr(product.price)}
          </p>
          {product.compareAtPrice ? (
            <p className="text-base text-muted-foreground line-through tabular-nums">
              {formatInr(product.compareAtPrice)}
            </p>
          ) : null}
          {product.isNew ? <Badge variant="highlight">New</Badge> : null}
          <Badge variant={soldOut ? "secondary" : "outline"}>
            {soldOut ? "Out of stock" : "Available to enquire"}
          </Badge>
        </div>
      </div>
      <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
        {product.description}
      </p>
      <OptionSelector
        label="Colour"
        options={product.colors}
        value={color}
        onChange={setColor}
        disabled={soldOut}
      />
      <OptionSelector
        label="Size"
        options={product.sizes}
        value={size}
        onChange={(value) => {
          setSize(value);
          setError(undefined);
        }}
        disabled={soldOut}
      />
      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Magnetic className="flex w-full sm:flex-1">
          <Button
            variant="highlight"
            size="xl"
            onClick={onEnquire}
            disabled={soldOut}
            className="w-full"
          >
            Enquire on WhatsApp
          </Button>
        </Magnetic>
        <Button
          variant="outline"
          size="xl"
          render={<Link href="/stores" />}
          nativeButton={false}
          className="flex-1"
        >
          Visit store
        </Button>
        <Button
          type="button"
          variant={saved ? "default" : "outline"}
          size="xl"
          aria-pressed={saved}
          onClick={() => toggle(product)}
          className="sm:flex-none"
        >
          <HeartIcon className={cn(saved && "fill-current")} />
          {saved ? "Saved" : "Save"}
        </Button>
      </div>
      {site.whatsapp.isDemo ? (
        <p className="text-xs text-muted-foreground">
          WhatsApp opens a demonstration number until the live line is confirmed.
        </p>
      ) : null}
      <div className="border-t pt-6">
        <h2 className="kicker">
          Details
        </h2>
        <ul className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
          <li>Collection: {product.collection.replace("-", " ")}</li>
          <li>Tags: {product.tags.join(", ")}</li>
          <li>Demonstration product — replace with live inventory when ready.</li>
        </ul>
      </div>
      <div className="border-t pt-6">
        <h2 className="kicker">
          Store pickup
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Shipping, returns, and delivery promises are not published in this
          preview. Visit a store or enquire on WhatsApp for confirmed policies.
        </p>
      </div>
    </div>
  );
}
