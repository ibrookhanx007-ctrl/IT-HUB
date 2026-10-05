import type { UsService } from "@/types";

export const businessTaxFiling: UsService = {
  slug: "business-tax-filing",
  title: "Business Tax Filing",
  shortDescription:
    "Professional assistance with business tax filing and related tax compliance requirements.",
  icon: "Calculator",
  visualAlt: "Calculator icon representing US business tax filing",
  headline: "US Business Tax Filing & Compliance Support",
  intro:
    "US business tax obligations depend on your entity type, ownership, and activity, and they can include federal and state filings. We help you understand what applies and prepare your returns and related forms accurately and on time.",
  includes: [
    "A review of the federal and state filings that may apply to your entity",
    "Preparation of federal business tax returns and related forms",
    "Support with filings for foreign-owned US entities, where applicable",
    "Organization of the financial records needed to prepare your return",
    "A filing calendar so you know upcoming deadlines",
    "Help responding to routine tax agency notices",
  ],
  audience: [
    "US LLCs and corporations of all sizes",
    "Foreign-owned US companies with US filing or reporting requirements",
    "Online and service businesses with US-based operations",
    "Owners who want clarity on their filing deadlines",
  ],
  benefits: [
    {
      title: "Know what applies to you",
      description:
        "Get a clear picture of the filings tied to your entity type and location.",
    },
    {
      title: "Organized and on time",
      description:
        "A deadline calendar and document checklist help you avoid last-minute scrambling.",
    },
    {
      title: "Support for international owners",
      description:
        "Guidance on forms and rules that commonly affect non-US owners.",
    },
    {
      title: "Works with your bookkeeping",
      description:
        "Pair filing with bookkeeping so your records are ready when the return is due.",
    },
  ],
  process: [
    {
      title: "Intake",
      description:
        "Share your entity details, prior filings, and financial records.",
    },
    {
      title: "Filing review",
      description:
        "We identify the returns and forms that may apply and the deadlines.",
    },
    {
      title: "Preparation",
      description:
        "Returns are prepared from your records and sent to you for review.",
    },
    {
      title: "Submission",
      description:
        "After your approval, the return is filed with the relevant agency.",
    },
    {
      title: "Follow-up",
      description:
        "We help you keep copies, track confirmations, and plan for next year.",
    },
  ],
  faqs: [
    {
      question: "Can you guarantee tax savings?",
      answer:
        "No. Your tax liability depends on your facts and the law. We prepare returns accurately and help you understand your obligations, but we do not promise a particular tax result.",
    },
    {
      question: "Does my US LLC have to file a tax return?",
      answer:
        "In many cases, yes, even when there is no income. Requirements depend on how the LLC is taxed and who owns it. We review this with you.",
    },
    {
      question: "Do you file state taxes too?",
      answer:
        "We can help with state-level filings where applicable. Requirements differ by state, so we confirm them as part of intake.",
    },
    {
      question: "What if I missed a deadline?",
      answer:
        "Contact us as soon as possible. We can review your situation and explain the general options, though penalties and relief are decided by the tax agencies.",
    },
  ],
  seo: {
    title: "US Business Tax Filing Services | Federal & State Support",
    description:
      "Business tax filing assistance for US LLCs and corporations, including foreign-owned entities. Organized preparation and deadline tracking.",
    keywords: ["US business tax services", "business tax filing"],
  },
};
