import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32",
        className,
      )}
    >
      {children}
    </div>
  );
}
