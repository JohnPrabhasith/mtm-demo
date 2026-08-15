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
    <p className={cn("kicker", stitch && "yellow-stitch", className)}>
      {children}
    </p>
  );
}
