"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { toast } from "sonner";
import { getProductById } from "@/data/products";
import type { Product } from "@/data/types";

const STORAGE_KEY = "mtm-wishlist-v1";

function readIds(): string[] {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === "string")
      : [];
  } catch {
    return [];
  }
}

let memoryIds: string[] = [];
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setIds(ids: string[]) {
  memoryIds = ids;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  emit();
}

function getSnapshot() {
  return memoryIds;
}

const EMPTY_IDS: string[] = [];

function getServerSnapshot() {
  return EMPTY_IDS;
}

if (typeof window !== "undefined") {
  memoryIds = readIds();
}

type WishlistContextValue = {
  ids: string[];
  products: Product[];
  has: (id: string) => boolean;
  toggle: (product: Product) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const products = useMemo(
    () =>
      ids
        .map((id) => getProductById(id))
        .filter((product): product is Product => Boolean(product)),
    [ids],
  );

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback((product: Product) => {
    const current = getSnapshot();
    const exists = current.includes(product.id);
    const next = exists
      ? current.filter((id) => id !== product.id)
      : [...current, product.id];
    setIds(next);
    toast(exists ? "Removed from wishlist" : "Saved to wishlist", {
      description: product.name,
    });
  }, []);

  const value = useMemo(
    () => ({ ids, products, has, toggle }),
    [ids, products, has, toggle],
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
