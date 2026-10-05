import type { UsService } from "@/types";

export const businessConsulting: UsService = {
  slug: "business-consulting",
  title: "Business Consulting",
  shortDescription:
    "Business guidance covering formation, structure, compliance, operations, and growth.",
  icon: "Lightbulb",
  visualAlt: "Light bulb icon representing US business consulting",
  headline: "US Business Consulting for Startups & Growing Companies",
  intro:
    "Whether you are starting up or expanding, we offer practical business guidance across formation, structure, compliance, operations, and growth planning, with referrals to licensed attorneys and tax professionals when needed.",
  includes: [
    "One-to-one consultation sessions about your US business plans",
    "A review of your current structure, filings, and processes",
    "A written summary of recommended next steps",
    "Guidance on setting up operations such as banking, bookkeeping, and compliance",
    "Planning support for entering or expanding in the US market",
    "Referrals to licensed professionals for legal and specialized tax questions",
  ],
  audience: [
    "Founders planning a US launch",
    "Non-US businesses expanding to the US market",
    "Small businesses that want a second opinion on their setup",
    "Owners looking for a practical to-do list for compliance and operations",
  ],
  benefits: [
    {
      title: "Practical, plain-language advice",
      description:
        "Understand your options and the steps involved without jargon.",
    },
    {
      title: "A single plan",
      description:
        "Connect formation, tax, accounting, and compliance into a clear sequence.",
    },
    {
      title: "Right-sized support",
      description: "Use a one-time session or ongoing guidance as needed.",
    },
    {
      title: "Know when to call a specialist",
      description:
        "We tell you when a question needs an attorney or licensed tax professional.",
    },
  ],
  process: [
    {
      title: "Initial call",
      description: "We learn about your business, goals, and timeline.",
    },
    {
      title: "Review",
      description:
        "We review your current setup and identify gaps and priorities.",
    },
    {
      title: "Recommendations",
      description:
        "You receive a summary of suggested actions in order of priority.",
    },
    {
      title: "Next steps",
      description:
        "We can support implementation or hand you a plan to follow.",
    },
  ],
  faqs: [
    {
      question: "Is business consulting the same as legal advice?",
      answer:
        "No. Our consulting is general business guidance. For legal or specialized tax advice, please consult a licensed attorney or tax professional.",
    },
    {
      question: "Can you guarantee business results or immigration outcomes?",
      answer:
        "No. We cannot promise business results, and we do not provide immigration services or guarantee visa or immigration outcomes.",
    },
    {
      question: "How long is a consultation?",
      answer:
        "Session length depends on the scope. We agree on it before we begin.",
    },
    {
      question: "Can I combine consulting with other services?",
      answer:
        "Yes. Many clients start with a consultation and then add formation, EIN, bookkeeping, or compliance support.",
    },
  ],
  seo: {
    title: "US Business Consulting | Formation, Compliance & Growth",
    description:
      "Practical US business consulting on formation, structure, compliance, operations, and growth, with referrals to licensed professionals when needed.",
    keywords: ["US business consulting", "US corporate services"],
  },
};
