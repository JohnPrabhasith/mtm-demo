import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "canvas",
  contained = true,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "canvas" | "card" | "ink";
  contained?: boolean;
}) {
  const inner = contained ? <Container>{children}</Container> : children;

  return (
    <section
      className={cn(
        "section-y",
        tone === "card" && "bg-card",
        tone === "ink" && "bg-void text-ivory",
        className,
      )}
    >
      {inner}
    </section>
  );
}
