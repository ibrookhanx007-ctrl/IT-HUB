import type { UsService } from "@/types";

export const registeredAgentServices: UsService = {
  slug: "registered-agent-services",
  title: "Registered Agent",
  shortDescription:
    "Registered agent support to help businesses maintain their required official business contact.",
  icon: "ShieldCheck",
  visualAlt: "Shield icon representing registered agent services",
  headline: "Registered Agent Services for US Businesses",
  intro:
    "Most US states require a business entity to maintain a registered agent: an official contact with a physical address in the state who can receive legal and government notices. We help you meet that requirement and keep your records current.",
  includes: [
    "Registered agent designation for your entity where the service is available in your state",
    "Receipt and forwarding of official notices and service-of-process documents",
    "Notification when documents arrive so you can review them promptly",
    "Help with changing your registered agent when needed",
    "Reminders linked to your entity's compliance calendar",
  ],
  audience: [
    "Newly formed LLCs and corporations that need a registered agent",
    "Founders who do not have a physical address in the state of formation",
    "Businesses that want to separate official notices from their personal or office address",
    "Companies replacing an existing registered agent",
  ],
  benefits: [
    {
      title: "Meets a common state requirement",
      description:
        "A designated agent helps you keep the official contact your state expects on file.",
    },
    {
      title: "Important documents don't go unnoticed",
      description:
        "You are notified when official mail arrives so that you can respond within the required time.",
    },
    {
      title: "Privacy for your address",
      description:
        "The agent's address, rather than your own, can appear on public state records.",
    },
    {
      title: "Works alongside formation",
      description:
        "Add it to a formation order or switch from another provider later.",
    },
  ],
  process: [
    {
      title: "Confirm your state",
      description:
        "We confirm the state of formation and whether the service is available there.",
    },
    {
      title: "Designate the agent",
      description:
        "We provide the agent details for your formation filing or file a change of agent.",
    },
    {
      title: "Receive and forward",
      description:
        "Official notices received on your behalf are scanned and forwarded to you.",
    },
    {
      title: "Ongoing support",
      description:
        "We keep your agent details aligned with your annual compliance filings.",
    },
  ],
  faqs: [
    {
      question: "Do I need a registered agent?",
      answer:
        "In general, yes. Most states require every LLC and corporation to name one. Specific requirements vary by state, so please confirm the rules for your state of formation.",
    },
    {
      question: "Can I be my own registered agent?",
      answer:
        "Often you can, if you have a physical address in the state and are available during business hours. Many owners choose a service so notices are handled reliably.",
    },
    {
      question: "What happens if a legal notice arrives?",
      answer:
        "We forward the document to you promptly. Responding to legal matters is your responsibility, and we recommend speaking with a licensed attorney.",
    },
    {
      question: "Can I change my registered agent later?",
      answer:
        "Yes. States generally allow a change of registered agent through a filing. We can help prepare it. State fees may apply.",
    },
  ],
  seo: {
    title: "Registered Agent Services | US LLC & Corporation Support",
    description:
      "Registered agent support for US LLCs and corporations: official notice handling, address privacy, and help with agent changes.",
    keywords: ["registered agent services", "US corporate services"],
  },
};
