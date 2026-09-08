import type {
  PageIntro,
  NotFoundContent,
  ServicesPageContent,
  ServiceDetailLabels,
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
