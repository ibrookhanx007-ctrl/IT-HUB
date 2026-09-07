import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

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
  title: "IT HUB Corporation",
  description: "IT HUB Corporation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingSans.variable} ${bodySans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-navy-900 font-body text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
