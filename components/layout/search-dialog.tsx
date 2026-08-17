"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { products } from "@/data/products";
import { searchProducts } from "@/lib/catalog";

export function SearchDialog({ inverted = false }: { inverted?: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchProducts(products, query), [query]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setQuery("");
        }
      }}
    >
      <DialogTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search products"
            className={inverted ? "text-white hover:bg-white/10 hover:text-white" : undefined}
          />
        }
      >
        <SearchIcon />
      </DialogTrigger>
      <DialogContent className="max-w-xl sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Search the floor</DialogTitle>
          <DialogDescription>
            Find shirts, tees, denim, cargos, and party wear.
          </DialogDescription>
        </DialogHeader>
        <search>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const value = query.trim();
              if (!value) {
                return;
              }
              setOpen(false);
              router.push(`/men?q=${encodeURIComponent(value)}`);
            }}
          >
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, category, or style"
              aria-label="Search products"
              className="h-11"
              autoFocus
            />
          </form>
        </search>
        {query.trim() && results.length === 0 ? (
          <Empty className="border">
            <EmptyHeader>
              <EmptyTitle>No matches</EmptyTitle>
              <EmptyDescription>
                Try a category like shirts or jeans.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : null}
        {results.length > 0 ? (
          <ul className="flex max-h-80 flex-col gap-1 overflow-y-auto">
            {results.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/product/${product.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-sm p-2 hover:bg-muted"
                >
                  <span className="relative size-14 shrink-0 overflow-hidden bg-secondary">
                    <Image
                      src={product.images[0]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">
                      {product.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {product.category.replace("-", " ")}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
