import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  inverted = false,
  stitch = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  stitch?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl",
          stitch && "yellow-stitch",
          inverted ? "text-white" : "text-foreground",
          align === "center" && stitch && "inline-block text-left",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 max-w-xl text-sm leading-relaxed sm:text-base",
            inverted ? "text-white/70" : "text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
