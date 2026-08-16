import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 sm:gap-3">
      <Image
        src="/brand/mtm-logo.png"
        alt=""
        width={150}
        height={150}
        priority
        className={cn(
          "w-auto object-contain",
          compact ? "h-11 w-11" : "h-12 w-12 sm:h-16 sm:w-16",
        )}
      />
      <span className="font-heading text-[0.95rem] leading-[1.05] font-medium tracking-[-0.02em] text-ivory sm:text-lg">
        Mana Trendz
        <span className="mt-0.5 block text-gold">Macha</span>
      </span>
    </span>
  );
}
