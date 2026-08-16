import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

export function BrandMark({
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Image
      src="/brand/mtm-logo.png"
      alt={site.name}
      width={150}
      height={150}
      priority
      className={cn(
        "w-auto object-contain",
        compact ? "h-11 w-11" : "h-12 w-12 sm:h-16 sm:w-16",
      )}
    />
  );
}
