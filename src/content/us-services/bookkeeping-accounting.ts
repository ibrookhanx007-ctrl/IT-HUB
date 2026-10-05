import type { UsService } from "@/types";

export const bookkeepingAccounting: UsService = {
  slug: "bookkeeping-accounting",
  title: "Bookkeeping & Accounting",
  shortDescription:
    "Organized bookkeeping and accounting support to help businesses maintain accurate financial records.",
  icon: "Receipt",
  visualAlt: "Receipt icon representing bookkeeping and accounting services",
  headline: "Bookkeeping & Accounting Services for US Businesses",
  intro:
    "Accurate books make tax filing, banking, and decision-making easier. We help you record transactions, reconcile accounts, and produce clear financial reports on a schedule that suits your business.",
  includes: [
    "Setup or clean-up of your accounting file in common online accounting software",
    "Categorization of transactions and bank and card reconciliation",
    "Monthly or quarterly financial statements such as profit and loss and balance sheet",
    "Accounts payable and receivable tracking support",
    "Year-end records prepared for your tax filing",
    "Periodic review calls to discuss your numbers",
  ],
  audience: [
    "New businesses setting up their books for the first time",
    "Small businesses behind on bookkeeping",
    "E-commerce, consulting, and service companies with US operations",
    "Owners who want their records ready for tax filing",
  ],
  benefits: [
    {
      title: "A clear view of your finances",
      description: "Regular reports show income, expenses, and cash position.",
    },
    {
      title: "Tax-ready records",
      description: "Organized books reduce preparation time at filing season.",
    },
    {
      title: "Less admin for you",
      description:
        "Hand over routine recording and reconciliation so you can focus on operations.",
    },
    {
      title: "Flexible schedule",
      description:
        "Choose monthly or quarterly support based on your transaction volume.",
    },
  ],
  process: [
    {
      title: "Needs assessment",
      description: "We review your transaction volume, accounts, and software.",
    },
    {
      title: "Setup or clean-up",
      description:
        "We organize your chart of accounts and catch up any prior periods.",
    },
    {
      title: "Ongoing bookkeeping",
      description:
        "Transactions are recorded and reconciled on the agreed schedule.",
    },
    {
      title: "Reporting",
      description:
        "You receive financial statements and a short summary each period.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between bookkeeping and accounting?",
      answer:
        "Bookkeeping is the day-to-day recording and organizing of transactions. Accounting builds on those records to produce reports and analysis. We support both.",
    },
    {
      question: "Which accounting software do you work with?",
      answer:
        "We can work in widely used cloud accounting platforms. Tell us what you use, or we can help you choose one.",
    },
    {
      question: "Can you catch up books that are months behind?",
      answer:
        "Yes. A catch-up review comes first, and the effort depends on the volume and condition of your records.",
    },
    {
      question: "Is bookkeeping the same as tax filing?",
      answer:
        "No. Bookkeeping prepares the records. Tax filing is a separate service, though the two work well together.",
    },
  ],
  seo: {
    title: "Bookkeeping & Accounting Services for US Businesses",
    description:
      "Organized bookkeeping and accounting support for US businesses: reconciliation, monthly financial statements, and tax-ready records.",
    keywords: ["business bookkeeping services", "US corporate services"],
  },
};
