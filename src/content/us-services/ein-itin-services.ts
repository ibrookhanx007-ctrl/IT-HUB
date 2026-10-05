import type { UsService } from "@/types";

export const einItinServices: UsService = {
  slug: "ein-itin-services",
  title: "EIN & ITIN Services",
  shortDescription:
    "Assistance with obtaining EIN and ITIN for eligible businesses and individuals.",
  icon: "FileSignature",
  visualAlt:
    "Document and signature icon representing EIN and ITIN applications",
  headline: "EIN & ITIN Application Assistance",
  intro:
    "An Employer Identification Number (EIN) identifies a business for US tax purposes, and an Individual Taxpayer Identification Number (ITIN) is for individuals who need a US taxpayer ID but are not eligible for a Social Security Number. We help you prepare accurate applications. The IRS makes all issuance decisions.",
  includes: [
    "A review of whether an EIN, an ITIN, or both may apply to your situation",
    "Preparation of the EIN application (Form SS-4) with your business details",
    "Preparation of the ITIN application (Form W-7) and a checklist of supporting documents",
    "Guidance on how to submit and what to expect after submission",
    "Help understanding IRS correspondence related to your application",
  ],
  audience: [
    "New US LLCs and corporations that need an EIN",
    "Non-US founders and owners who need a US taxpayer ID",
    "Individuals who must file a US tax return or be listed on one, and are not eligible for an SSN",
    "Businesses that need an EIN to open accounts, hire, or file taxes",
  ],
  benefits: [
    {
      title: "Fewer errors",
      description:
        "Applications are prepared carefully, which helps avoid common mismatches that slow processing.",
    },
    {
      title: "Clear document guidance",
      description:
        "You get a plain-language checklist of what the IRS may require for your situation.",
    },
    {
      title: "Support for international applicants",
      description:
        "We explain the steps that are specific to applicants without a US address or SSN.",
    },
    {
      title: "Honest expectations",
      description:
        "We explain typical timelines and requirements without promising outcomes we do not control.",
    },
  ],
  process: [
    {
      title: "Eligibility review",
      description:
        "We confirm which identification number applies to you and what information is needed.",
    },
    {
      title: "Information and documents",
      description:
        "You provide business or personal details and any required supporting documents.",
    },
    {
      title: "Application preparation",
      description: "We prepare the forms for your review and signature.",
    },
    {
      title: "Submission guidance",
      description:
        "We help you submit through the appropriate IRS channel and keep track of the status.",
    },
    {
      title: "Follow-up",
      description:
        "We help you understand the IRS response and record the number once it is issued.",
    },
  ],
  faqs: [
    {
      question: "Can you guarantee that my EIN or ITIN will be approved?",
      answer:
        "No. The IRS alone decides whether to issue an EIN or ITIN. We prepare and help submit your application accurately, but we cannot guarantee approval or processing time.",
    },
    {
      question: "Do I need an EIN for my LLC?",
      answer:
        "Many LLCs need one, for example to open a business bank account, hire employees, or file certain tax returns. Whether you need one depends on your structure and activities.",
    },
    {
      question: "Who needs an ITIN?",
      answer:
        "ITINs are intended for individuals who have a US tax filing or reporting requirement and are not eligible for an SSN. The IRS sets the eligibility rules, so we review your circumstances first.",
    },
    {
      question: "Can I apply for an EIN myself?",
      answer:
        "Yes. The IRS issues EINs directly at no charge. Our service is preparation, review, and guidance for people who want help with the process.",
    },
  ],
  seo: {
    title: "EIN & ITIN Services | Application Assistance for US Businesses",
    description:
      "Get help preparing EIN and ITIN applications for your US business or personal tax needs. Guidance on eligibility, documents, and submission.",
    keywords: ["EIN services", "ITIN services", "US company setup"],
  },
};
