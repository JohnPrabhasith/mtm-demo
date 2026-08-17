"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptionSelector } from "@/components/products/option-selector";
import {
  generateWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";
import type { Product } from "@/data/types";
import { Magnetic } from "@/components/motion/magnetic";

export function ProductInfo({ product }: { product: Product }) {
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
        <h1 className="gold-rule font-heading text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {product.category.replace("-", " ")}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-lg font-medium">Price in store</p>
          {product.isNew ? <Badge variant="highlight">New</Badge> : null}
          <Badge variant={soldOut ? "secondary" : "outline"}>
            {soldOut ? "Out of stock" : "Ask the floor"}
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
      </div>
      <div className="border-t pt-6">
        <h2 className="kicker">
          Details
        </h2>
        <ul className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
          <li>Collection: {product.collection.replace("-", " ")}</li>
          <li>Tags: {product.tags.join(", ")}</li>
          <li>Confirm today&apos;s price and sizes at the branch.</li>
        </ul>
      </div>
      <div className="border-t pt-6">
        <h2 className="kicker">
          Store pickup
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          No online checkout. Walk in or WhatsApp a branch for the piece on
          the rack.
        </p>
      </div>
    </div>
  );
}
