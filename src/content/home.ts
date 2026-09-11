import type { HomeContent } from "@/types";

export const homeContent: HomeContent = {
  hero: {
    primaryCta: { label: "Get a Free Consultation", href: "/contact" },
    secondaryCta: { label: "View Services", href: "/services" },
  },
  servicesSection: {
    heading: "Our Services",
    description:
      "Ten service lines covering IT, tax, and business operations — one point of contact instead of five separate vendors.",
  },
  whyUsSection: {
    heading: "Why Choose Us",
  },
  aboutPreview: {
    heading: "Who We Are",
    paragraph:
      "IT HUB Corporation brings IT, tax, and business services together under one roof, so companies in Khyber Pakhtunkhwa and across Pakistan don't need five different vendors to stay compliant, online, and running. From FBR and KPRA registration to custom software and digital marketing, our team handles the technical and regulatory work so you can focus on the business itself.",
    cta: { label: "More about us", href: "/about" },
    highlights: [
      { icon: "MapPin", label: "Based in Mardan, KP" },
      { icon: "Code", label: "In-house IT & software team" },
      { icon: "ShieldCheck", label: "FBR & KPRA compliant" },
      { icon: "Clock", label: "One business day response" },
    ],
  },
  ctaBand: {
    heading: "Ready to get started?",
    description:
      "Tell us what your business needs — we'll get back to you within one business day.",
  },
};
