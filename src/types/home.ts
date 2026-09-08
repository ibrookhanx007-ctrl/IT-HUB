import type { CtaLink } from "./site";

export interface WhyUsPoint {
  title: string;
  description: string;
  /** lucide-react icon name, e.g. "Users". */
  icon: string;
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
