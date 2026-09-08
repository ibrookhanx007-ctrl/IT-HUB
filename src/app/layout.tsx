import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { getOrganizationSchema } from "@/lib/structured-data";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/ui/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Confident, geometric sans for headings.
const headingSans = Sora({
  variable: "--font-heading-sans",
  subsets: ["latin"],
  display: "swap",
});

// Highly readable sans for body copy.
const bodySans = Inter({
  variable: "--font-body-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingSans.variable} ${bodySans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-navy-900 font-body text-ink-primary antialiased">
        <a
          href="#main-content"
          className="sr-only rounded-md bg-gold px-4 py-2 font-medium text-navy-900 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        <JsonLd data={getOrganizationSchema()} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
