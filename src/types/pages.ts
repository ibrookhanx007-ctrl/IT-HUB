import type { CtaLink } from "./site";

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

export interface ServicesPageContent extends PageIntro {
  /** CTA label linking each list item to its detail page. */
  learnMoreLabel: string;
}

export interface ServiceDetailLabels {
  deliverablesHeading: string;
  relatedHeading: string;
}

export interface ContactFieldLabels {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface ContactFormLabels {
  submitLabel: string;
  submittingLabel: string;
  servicePlaceholder: string;
  successTitle: string;
  successDescription: string;
  errorTitle: string;
  genericErrorMessage: string;
}

export interface NotFoundContent {
  heading: string;
  description: string;
  homeCta: CtaLink;
  servicesCta: CtaLink;
}
