import type { UsService } from "@/types";

export const salesTaxServices: UsService = {
  slug: "sales-tax-services",
  title: "Sales Tax Services",
  shortDescription:
    "Sales tax registration, compliance, filing assistance, and related support where applicable.",
  icon: "Scale",
  visualAlt: "Balance scale icon representing US sales tax compliance",
  headline: "US Sales Tax Registration & Filing Assistance",
  intro:
    "Sales tax rules in the US are set by individual states and vary widely. We help you work out where you may have a sales tax obligation, register where required, and keep your returns filed on schedule.",
  includes: [
    "A review of your sales activity to identify states where registration may be needed",
    "Preparation and submission of sales tax permit registrations",
    "Preparation of periodic sales tax returns",
    "Guidance on resale and exemption certificate documentation",
    "A filing calendar by state and filing frequency",
  ],
  audience: [
    "E-commerce sellers shipping to customers in multiple states",
    "Retailers and service providers selling taxable goods or services",
    "Businesses that have crossed or are approaching a state's sales threshold",
    "Companies that need to organize multi-state filings",
  ],
  benefits: [
    {
      title: "Clarity on a complex area",
      description:
        "Understand how state rules may apply to your sales in plain language.",
    },
    {
      title: "Fewer missed filings",
      description:
        "A state-by-state calendar helps keep returns and payments on time.",
    },
    {
      title: "Registration support",
      description:
        "We handle the permit paperwork where registration is required.",
    },
    {
      title: "Records you can rely on",
      description:
        "Organized exemption documentation helps when a state asks for it.",
    },
  ],
  process: [
    {
      title: "Sales review",
      description:
        "We look at where you sell, what you sell, and your sales volume.",
    },
    {
      title: "Obligation assessment",
      description:
        "We outline where registration may be needed, for your confirmation.",
    },
    {
      title: "Registration",
      description: "We prepare and submit the sales tax permit applications.",
    },
    {
      title: "Return filing",
      description:
        "We prepare and file returns for the periods agreed with you.",
    },
  ],
  faqs: [
    {
      question: "Do I have to collect sales tax in every state?",
      answer:
        "Not necessarily. Obligations depend on each state's rules, including thresholds and what you sell. We help you review where you may need to register.",
    },
    {
      question: "Are all products and services taxable?",
      answer:
        "No. Taxability differs by state and by product or service type. We check the rules that apply to your offerings.",
    },
    {
      question: "Do you calculate sales tax at checkout?",
      answer:
        "Our service focuses on registration, compliance, and filing support. Checkout tax setup depends on your sales platform, and we can point you in the right direction.",
    },
    {
      question: "Who decides whether I owe sales tax?",
      answer:
        "Each state's tax authority sets and enforces its rules. We provide administrative assistance and general guidance, not legal or tax determinations.",
    },
  ],
  seo: {
    title: "US Sales Tax Services | Registration & Filing Support",
    description:
      "Sales tax registration, compliance, and filing assistance for US businesses selling across states, where applicable.",
    keywords: ["US sales tax services", "US business tax services"],
  },
};
