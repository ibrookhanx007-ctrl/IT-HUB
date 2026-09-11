import type {
  PageIntro,
  NotFoundContent,
  ServicesPageContent,
  ServiceDetailLabels,
  PortfolioPageContent,
  PortfolioDetailLabels,
  ContactFieldLabels,
  ContactFormLabels,
} from "@/types";

export const servicesPageIntro: ServicesPageContent = {
  seo: {
    title: "Our Services",
    description:
      "IT, tax, accounting, and business services for companies in Pakistan — from FBR & KPRA compliance to custom software and digital marketing.",
  },
  hero: {
    heading: "Our Services",
    description:
      "Ten service lines covering IT, tax, and business operations. Explore each one below, or get in touch and we'll point you to the right one.",
  },
  learnMoreLabel: "Learn more",
};

export const serviceDetailLabels: ServiceDetailLabels = {
  deliverablesHeading: "What's included",
  relatedHeading: "Related services",
  faqHeading: "Frequently asked questions",
  faqViewAllLabel: "View all FAQs",
};

export const portfolioPageIntro: PortfolioPageContent = {
  seo: {
    title: "Our Work",
    description:
      "Case studies from IT HUB Corporation's work across tax compliance, custom software, e-commerce, and business registration in Pakistan.",
  },
  hero: {
    heading: "Our Work",
    description:
      "A look at the kind of work we do, organized by service. We're adding real case studies here as projects wrap up.",
  },
  filterAllLabel: "All",
  viewCaseStudyLabel: "View case study",
  emptyStateMessage: "No case studies published yet — check back soon.",
};

export const portfolioDetailLabels: PortfolioDetailLabels = {
  challengeHeading: "The Challenge",
  solutionHeading: "Our Solution",
  resultHeading: "The Result",
  relatedServiceLabel: "Related service",
  backLabel: "Back to all case studies",
};

export const faqPageIntro: PageIntro = {
  seo: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about working with IT HUB Corporation — getting started, tax and compliance, IT services, and pricing.",
  },
  hero: {
    heading: "Frequently Asked Questions",
    description:
      "Can't find what you're looking for? Get in touch and we'll answer directly.",
  },
};

export const contactPageIntro: PageIntro = {
  seo: {
    title: "Contact Us",
    description:
      "Get in touch with IT HUB Corporation in Mardan, Khyber Pakhtunkhwa — by phone, email, or the form below.",
  },
  hero: {
    heading: "Contact Us",
    description:
      "Have a question or want a quote? Reach us directly, or send a message and we'll get back to you within one business day.",
  },
};

export const contactFieldLabels: ContactFieldLabels = {
  address: "Address",
  phone: "Phone",
  email: "Email",
  hours: "Business Hours",
};

export const contactFormLabels: ContactFormLabels = {
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
  servicePlaceholder: "Select a service",
  successTitle: "Message sent",
  successDescription: "We'll get back to you within one business day.",
  errorTitle: "Couldn't send your message",
  genericErrorMessage: "Something went wrong. Please try again.",
};

export const notFoundContent: NotFoundContent = {
  heading: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or may have moved. Try one of the links below.",
  homeCta: { label: "Back to Home", href: "/" },
  servicesCta: { label: "Browse Services", href: "/services" },
};
