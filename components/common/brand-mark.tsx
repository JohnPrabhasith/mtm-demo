import { cn } from "@/lib/utils";

export function BrandMark({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex flex-col leading-none",
        inverted ? "text-white" : "text-primary",
      )}
    >
      <span
        className={cn(
          "font-extrabold tracking-[0.22em]",
          compact ? "text-[0.68rem]" : "text-[0.78rem] sm:text-[0.82rem]",
        )}
      >
        MANA TRENDZ
      </span>
      <span
        className={cn(
          "mt-1 font-semibold tracking-[0.42em]",
          compact ? "text-[0.52rem]" : "text-[0.58rem] sm:text-[0.62rem]",
          inverted ? "text-accent" : "text-violet",
        )}
      >
        MACHA
      </span>
    </span>
  );
}
