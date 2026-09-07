import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "IT HUB Corporation",
  tagline: "Technology • Business • Professional Solutions",
  slogan: "Built for Your Growth",
  description:
    "IT HUB Corporation delivers IT, tax, accounting, and business services to companies across Pakistan, combining technical expertise with hands-on compliance support.",
  contact: {
    address: {
      line1: "TODO: Add office street address",
      city: "Mardan",
      region: "Khyber Pakhtunkhwa",
      country: "Pakistan",
    },
    phone: "TODO: Add phone number",
    email: "TODO: Add email address",
  },
  social: [
    { platform: "Facebook", href: "TODO" },
    { platform: "Instagram", href: "TODO" },
    { platform: "LinkedIn", href: "TODO" },
    { platform: "WhatsApp", href: "TODO" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: {
    label: "Get a Quote",
    href: "/contact",
  },
  footer: {
    columns: {
      services: "Services",
      quickLinks: "Quick Links",
      contact: "Contact",
    },
    copyrightSuffix: "All rights reserved.",
  },
};
