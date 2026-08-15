"use client";

import { WishlistProvider } from "@/components/providers/wishlist-provider";
import { Toaster } from "@/components/ui/sonner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <WishlistProvider>
      {children}
      <Toaster position="bottom-right" />
    </WishlistProvider>
  );
}
