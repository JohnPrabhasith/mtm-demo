import type { Metadata } from "next";
import { Bodoni_Moda, Sora } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollThread } from "@/components/motion/scroll-thread";
import { site } from "@/config/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Trendy Fashion for Men & Kids`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/brand/mtm-logo.png",
    apple: "/brand/mtm-logo.png",
  },
  openGraph: {
    title: `${site.name} | Trendy Fashion for Men & Kids`,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/brand/mtm-logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${bodoni.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
          THESIS: A Hyderabad boutique after dark — gold foil on black, not a purple fashion template.
          OWN-WORLD: Void black, metallic gold, ivory type; Bodoni Moda display with Sora body; official MTM lockup.
          STORY: Find a look, enquire on WhatsApp, visit the floor.
          FIRST VIEWPORT: Logo top-left, photography cut from a slit, gold CTA to shop men.
          FORM: Official-logo boutique; seed skipped — client-pinned gold/black lockup beats the roll.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        -->`,
          }}
        />
        <AppProviders>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          <ScrollThread />
          <SiteHeader />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
