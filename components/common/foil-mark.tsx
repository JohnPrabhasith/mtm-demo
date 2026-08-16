import { cn } from "@/lib/utils";

export function FoilMark({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-3 text-gold", className)}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
    </span>
  );
}
