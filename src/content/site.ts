import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "IT HUB Corporation",
  tagline: "Technology • Business • Professional Solutions",
  slogan: "Built for Your Growth",
  description:
    "IT HUB Corporation delivers IT, tax, accounting, and business services to companies across Pakistan, combining technical expertise with hands-on compliance support.",
  // TODO: Replace with the real production domain once deployed (see
  // Prompt 13 / deployment docs). example.com is IANA's reserved
  // placeholder domain, so it's safe to ship until then.
  url: "https://example.com",
  keywords: [
    "IT HUB Corporation",
    "IT services Pakistan",
    "tax consultant Mardan",
    "business registration Pakistan",
    "FBR KPRA compliance",
    "digital marketing Khyber Pakhtunkhwa",
    "accounting services Pakistan",
  ],
  contact: {
    address: {
      line1: "TODO: Add office street address",
      city: "Mardan",
      region: "Khyber Pakhtunkhwa",
      country: "Pakistan",
    },
    phone: "TODO: Add phone number",
    email: "TODO: Add email address",
    hours: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
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
