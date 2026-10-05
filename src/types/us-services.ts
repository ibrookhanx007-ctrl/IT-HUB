import type { ServiceSeo } from "./services";

export interface UsServiceStep {
  title: string;
  description: string;
}

export interface UsServiceBenefit {
  title: string;
  description: string;
}

export interface UsServiceFaq {
  question: string;
  answer: string;
}

export interface UsService {
  slug: string;
  title: string;
  /** 1-2 sentences, for service cards. */
  shortDescription: string;
  /** lucide-react icon name — must exist in lib/icon.ts. */
  icon: string;
  /** Accessible name for the page's icon visual (the page's "image alt text"). */
  visualAlt: string;
  /** The page's H1. */
  headline: string;
  /** Short introduction under the H1. */
  intro: string;
  /** What the service includes. */
  includes: string[];
  /** Who the service is for. */
  audience: string[];
  benefits: UsServiceBenefit[];
  /** General process, in order. */
  process: UsServiceStep[];
  faqs: UsServiceFaq[];
  seo: ServiceSeo;
}

export interface UsCorporateContent {
  slug: string;
  navLabel: string;
  seo: ServiceSeo;
  /** Section heading — the 🇺🇸 flag is part of the text. */
  heading: string;
  /** Short subtitle under the section heading. */
  subtitle: string;
  /** Longer line shown above the card grid. */
  intro: string;
  /** Page H1 on the dedicated landing page. */
  pageHeading: string;
  learnMoreLabel: string;
  /** Link to the dedicated page, shown when the grid is embedded elsewhere. */
  exploreLabel: string;
  /** Accessible name for the decorative hero motif. */
  motifAlt: string;
  disclaimer: string;
  disclaimerHeading: string;
  cta: {
    heading: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  detail: {
    breadcrumbLabel: string;
    includesHeading: string;
    audienceHeading: string;
    benefitsHeading: string;
    processHeading: string;
    faqHeading: string;
    relatedHeading: string;
    stepLabel: string;
    /** "{title}" is replaced with the service title. */
    ctaHeadingTemplate: string;
    ctaDescription: string;
    ctaPrimaryLabel: string;
  };
  /** Group label for these services in the contact form's service select. */
  contactGroupLabel: string;
  /** Prefix for these services' titles in the inquiry email. */
  emailTitlePrefix: string;
}
