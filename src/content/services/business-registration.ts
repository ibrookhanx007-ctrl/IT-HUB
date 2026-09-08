import type { Service } from "@/types";

export const businessRegistration: Service = {
  slug: "business-registration",
  title: "Business Registration",
  shortDescription:
    "From choosing a legal structure to a registered NTN, handled start to finish.",
  longDescription: [
    "Registering a business in Pakistan means coordinating with more than one authority — SECP for company incorporation, FBR for your National Tax Number, and the relevant chamber or trade body for licensing — and a missed step at any one of them delays everything downstream.",
    "We manage the full sequence: advising on the right structure (sole proprietorship, partnership, or private limited company), preparing and filing the paperwork, and following up with each authority until you have a registration certificate in hand.",
  ],
  deliverables: [
    "Business structure advisory (sole proprietor, partnership, private limited)",
    "SECP company incorporation",
    "National Tax Number (NTN) registration",
    "Sales Tax Registration Number (STRN) registration",
    "Trade license and chamber registration",
    "Bank account opening documentation",
  ],
  icon: "Building2",
  seo: {
    title: "Business Registration Services",
    description:
      "SECP incorporation, NTN registration, and trade licensing for new businesses in Pakistan.",
    keywords: [
      "business registration Pakistan",
      "SECP company registration",
      "NTN registration",
      "company incorporation Pakistan",
    ],
  },
};
