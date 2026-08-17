import { InstagramGlyph } from "@/components/common/instagram-glyph";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function InstagramCta({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { href, handle } = site.social.instagram;

  return (
    <aside
      className={cn(
        "flex flex-col gap-5 border border-gold/25 bg-void p-6 text-ivory sm:flex-row sm:items-end sm:justify-between sm:p-8",
        className,
      )}
    >
      <div className="max-w-xl">
        <h2 className="gold-rule font-heading text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
          New drops live on Instagram
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ivory/70 sm:text-base">
          New drops, reels, and extra location links sit on {handle}.
        </p>
      </div>
      <Button
        variant="highlight"
        size={compact ? "lg" : "xl"}
        render={
          <a href={href} target="_blank" rel="noopener noreferrer" />
        }
        nativeButton={false}
      >
        <InstagramGlyph data-icon="inline-start" />
        Open Instagram
      </Button>
    </aside>
  );
}
