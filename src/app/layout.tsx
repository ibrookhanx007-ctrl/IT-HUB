import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT HUB Corporation",
  description: "IT HUB Corporation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
