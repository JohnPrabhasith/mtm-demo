"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { sortOptions, type SortKey } from "@/lib/catalog";
import type { Audience } from "@/data/types";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eyebrow } from "@/components/common/eyebrow";

const MEN_SIZES = ["S", "M", "L", "XL", "XXL"];
const KIDS_SIZES = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"];

export function ProductFilters({ audience }: { audience?: Audience }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sizes = audience === "kids" ? KIDS_SIZES : MEN_SIZES;
  const visibleCategories =
    audience === "kids"
      ? categories.filter((category) => category.audience === "kids")
      : categories.filter((category) => category.audience !== "kids");

  const sort = (searchParams.get("sort") as SortKey) || "newest";
  const sortItems = [
    { label: "Sort", value: null },
    ...sortOptions.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  ];

  function patch(next: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(next)) {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const selectedCategory = searchParams.get("category") ?? "";
  const selectedSize = searchParams.get("size") ?? "";
  const query = searchParams.get("q") ?? "";

  return (
    <div className="flex flex-col gap-8">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="catalog-search">Search</FieldLabel>
          <Input
            id="catalog-search"
            type="search"
            defaultValue={query}
            placeholder="Name, tag, collection"
            className="h-10"
            onChange={(event) => {
              const value = event.target.value.trim();
              const target = event.currentTarget as HTMLInputElement & {
                debounceTimer?: number;
              };
              window.clearTimeout(target.debounceTimer);
              target.debounceTimer = window.setTimeout(() => {
                patch({ q: value || null });
              }, 250);
            }}
          />
        </Field>
      </FieldGroup>

      <div>
        <Eyebrow className="mb-3">Category</Eyebrow>
        <ul className="flex flex-col gap-2">
          <li>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox
                checked={!selectedCategory}
                onCheckedChange={() => patch({ category: null })}
              />
              All
            </Label>
          </li>
          {visibleCategories.map((category) => (
            <li key={category.slug}>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={selectedCategory === category.slug}
                  onCheckedChange={(checked) =>
                    patch({ category: checked ? category.slug : null })
                  }
                />
                {category.name}
              </Label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Eyebrow className="mb-3">Size</Eyebrow>
        <ul className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <li key={size}>
              <Button
                type="button"
                size="sm"
                variant={selectedSize === size ? "default" : "outline"}
                onClick={() =>
                  patch({ size: selectedSize === size ? null : size })
                }
              >
                {size}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Eyebrow className="mb-3">Sort</Eyebrow>
        <Select
          items={sortItems}
          value={sort}
          onValueChange={(value) => {
            if (typeof value === "string") {
              patch({ sort: value === "newest" ? null : value });
            }
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false}>
            <SelectGroup>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="button"
        variant="ghost"
        onClick={() => router.replace(pathname, { scroll: false })}
      >
        Clear filters
      </Button>
    </div>
  );
}
