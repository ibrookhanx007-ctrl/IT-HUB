export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface ContactInfo {
  address: {
    line1: string;
    city: string;
    region: string;
    country: string;
  };
  phone: string;
  email: string;
  /** e.g. "Monday - Friday: 9:00 AM - 6:00 PM". */
  hours: string[];
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface FooterContent {
  columns: {
    services: string;
    quickLinks: string;
    contact: string;
  };
  copyrightSuffix: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  slogan: string;
  description: string;
  /** Production origin, no trailing slash — used for metadataBase, the
   *  sitemap, robots.txt, and JSON-LD. */
  url: string;
  /** Site-wide default SEO keywords (root layout metadata). */
  keywords: string[];
  contact: ContactInfo;
  social: SocialLink[];
  nav: NavItem[];
  primaryCta: CtaLink;
  footer: FooterContent;
}
