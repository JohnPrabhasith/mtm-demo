import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  stitch = false,
}: {
  children: React.ReactNode;
  className?: string;
  stitch?: boolean;
}) {
  return (
    <p className={cn("kicker text-gold", stitch && "gold-rule", className)}>
      {children}
    </p>
  );
}
