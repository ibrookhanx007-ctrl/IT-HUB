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
}

export interface SiteConfig {
  name: string;
  tagline: string;
  slogan: string;
  description: string;
  contact: ContactInfo;
  social: SocialLink[];
  nav: NavItem[];
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
