import "./globals.css";
import Providers from "./providers";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  metadataBase: new URL("https://drift-q.com"),
  openGraph: { title: site.name, description: site.description, type: "website" }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className="min-h-screen bg-white text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <Providers>
        <SiteHeader />
        {children}
        <SiteFooter />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
