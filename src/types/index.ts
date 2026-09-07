// Shared TypeScript types for site content (src/content/).

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
  contact: ContactInfo;
  social: SocialLink[];
  nav: NavItem[];
  primaryCta: CtaLink;
  footer: FooterContent;
}

export interface ServiceSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface Service {
  slug: string;
  title: string;
  /** One line, for service cards. */
  shortDescription: string;
  /** 2-3 paragraphs, one string per paragraph. */
  longDescription: string[];
  /** 4-6 concrete deliverables. */
  deliverables: string[];
  /** lucide-react icon name, e.g. "Calculator". */
  icon: string;
  seo: ServiceSeo;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface WhyUsPoint {
  title: string;
  description: string;
  /** lucide-react icon name, e.g. "Users". */
  icon: string;
}

export interface PageIntro {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    description: string;
  };
}

export interface AboutValue {
  title: string;
  description: string;
}

export interface AboutContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    description: string;
  };
  story: {
    heading: string;
    paragraphs: string[];
  };
  mission: {
    heading: string;
    statement: string;
  };
  vision: {
    heading: string;
    statement: string;
  };
  values: {
    heading: string;
    items: AboutValue[];
  };
}

export interface HomeContent {
  hero: {
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  servicesSection: {
    heading: string;
    description: string;
  };
  whyUsSection: {
    heading: string;
  };
  aboutPreview: {
    heading: string;
    paragraph: string;
    cta: CtaLink;
  };
  ctaBand: {
    heading: string;
    description: string;
  };
}
