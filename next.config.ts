import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Scoped to what this site actually loads: self-hosted fonts/scripts/
// styles (next/font, Tailwind — no external font or CDN requests), the
// Google Maps embed iframe on /contact, and same-origin API calls.
// 'unsafe-inline' is needed for Next.js's own inline bootstrap scripts
// and Radix/Sonner's inline positioning styles; 'unsafe-eval' is
// dev-only (React Fast Refresh).
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
