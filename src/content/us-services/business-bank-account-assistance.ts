import type { UsService } from "@/types";

export const businessBankAccountAssistance: UsService = {
  slug: "business-bank-account-assistance",
  title: "Business Bank Account Assistance",
  shortDescription:
    "Guidance and assistance with the business bank account setup process, subject to the bank's eligibility and approval requirements.",
  icon: "Landmark",
  visualAlt: "Bank building icon representing business bank account assistance",
  headline: "US Business Bank Account Setup Assistance",
  intro:
    "Opening a US business bank account usually requires formation documents, an EIN, and identity verification. We help you prepare and understand the process. Banks make their own eligibility and approval decisions.",
  includes: [
    "A checklist of the documents banks commonly request",
    "Review of your formation and EIN paperwork for consistency",
    "Guidance on comparing business account types and providers",
    "Help preparing your application information",
    "Explanations of typical identity and verification steps for international owners",
  ],
  audience: [
    "Newly formed US LLCs and corporations",
    "Non-US founders planning to open a US business account",
    "Online businesses that need to receive payments in US dollars",
    "Owners who want help organizing documents before applying",
  ],
  benefits: [
    {
      title: "Better prepared",
      description: "Know what a bank may ask for before you apply.",
    },
    {
      title: "Consistent paperwork",
      description:
        "We check that your documents match each other, which helps avoid avoidable questions.",
    },
    {
      title: "Informed comparison",
      description:
        "Understand the general trade-offs between account providers.",
    },
    {
      title: "Realistic expectations",
      description:
        "We explain how requirements can differ for international owners.",
    },
  ],
  process: [
    {
      title: "Readiness check",
      description:
        "We confirm your formation documents, EIN, and ownership details are in order.",
    },
    {
      title: "Provider guidance",
      description:
        "We outline the account options that may suit your business.",
    },
    {
      title: "Application preparation",
      description:
        "We help you gather and organize the information and documents.",
    },
    {
      title: "Application and follow-up",
      description:
        "You apply with the provider; we help you respond to document requests.",
    },
  ],
  faqs: [
    {
      question: "Can you guarantee my bank account will be approved?",
      answer:
        "No. Each bank sets its own eligibility, verification, and approval criteria and can decline an application. We provide guidance and preparation support only.",
    },
    {
      question: "Do I need to be in the US to open an account?",
      answer:
        "It depends on the provider. Some banks require an in-person visit, while others support remote applications. We explain the options during guidance.",
    },
    {
      question: "What do banks usually ask for?",
      answer:
        "Commonly formation documents, an EIN confirmation, an operating agreement, and identification for owners. Requirements vary by bank.",
    },
    {
      question: "Do you open the account for me?",
      answer:
        "The account is opened in your business's name by the bank. We assist with preparation and guidance.",
    },
  ],
  seo: {
    title: "US Business Bank Account Assistance | Setup Guidance",
    description:
      "Guidance with US business bank account setup: document checklists, paperwork review, and application preparation. Approval is decided by the bank.",
    keywords: ["US company setup", "US business formation services"],
  },
};
