import type { UsService } from "@/types";

export const businessAddressMailServices: UsService = {
  slug: "business-address-mail-services",
  title: "Business Address & Mail Services",
  shortDescription:
    "Professional business address and mail-handling solutions for eligible businesses.",
  icon: "Mail",
  visualAlt:
    "Mail envelope icon representing US business address and mail services",
  headline: "US Business Address & Mail Handling Services",
  intro:
    "A professional US business address helps you receive mail and correspondence without using a home address. We offer address and mail-handling support for eligible businesses, subject to applicable provider and postal rules.",
  includes: [
    "A US business mailing address for eligible businesses",
    "Mail receipt with notification when items arrive",
    "Scanning of mail contents on request",
    "Forwarding of mail and packages to you",
    "Guidance on the identity verification steps required for mail handling",
  ],
  audience: [
    "US LLCs and corporations that need a mailing address",
    "International founders without a US office",
    "Remote and home-based businesses that prefer a separate business address",
    "Online sellers who need a US address for correspondence",
  ],
  benefits: [
    {
      title: "Professional appearance",
      description:
        "Use a business address on your website, correspondence, and filings, where permitted.",
    },
    {
      title: "Keep your home address private",
      description: "Separate business mail from your personal address.",
    },
    {
      title: "Access from anywhere",
      description: "Review scanned mail online and decide what to forward.",
    },
    {
      title: "Support for remote owners",
      description:
        "Stay in touch with US agencies, banks, and vendors without being in the US.",
    },
  ],
  process: [
    {
      title: "Eligibility and plan",
      description:
        "We confirm your needs and the address options available to you.",
    },
    {
      title: "Verification",
      description:
        "You complete the identity verification that postal rules require for mail handling.",
    },
    {
      title: "Address activation",
      description: "You receive your business address and mail instructions.",
    },
    {
      title: "Mail handling",
      description:
        "You are notified when mail arrives and can choose to scan or forward it.",
    },
  ],
  faqs: [
    {
      question: "Is this a virtual office or a registered agent address?",
      answer:
        "A business mailing address is separate from a registered agent address, although the two services can be arranged together where available. We explain which fits your needs.",
    },
    {
      question: "Can I use this address with banks and government agencies?",
      answer:
        "Acceptance varies. Some banks and agencies have rules about the kind of address they accept. Check the requirements of the institution you are dealing with.",
    },
    {
      question: "Is identity verification required?",
      answer:
        "Typically yes. US postal rules require identity verification for mail handling services.",
    },
    {
      question: "Can you forward mail internationally?",
      answer:
        "Forwarding options depend on the provider, destination, and item type. We can confirm what is available for your situation.",
    },
  ],
  seo: {
    title: "US Business Address & Mail Services for Remote Founders",
    description:
      "Professional US business address and mail handling for eligible businesses: mail scanning, forwarding, and notifications.",
    keywords: ["business address services", "US company setup"],
  },
};
