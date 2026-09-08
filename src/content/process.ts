import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We start with a free conversation — in person, by phone, or on WhatsApp — to understand what you actually need, not just what you asked for. No commitment, no cost.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Proposal & Agreement",
    description:
      "You get a written proposal covering exactly what's included, the timeline, and the price. Nothing starts until you've agreed to it — no surprise line items later.",
    icon: "FileSignature",
  },
  {
    step: 3,
    title: "Execution",
    description:
      "Our team does the work — filing, registering, building, or designing — with the same people who scoped it, and regular updates so you're never wondering what's happening.",
    icon: "Wrench",
  },
  {
    step: 4,
    title: "Support & Follow-up",
    description:
      "The relationship doesn't end at delivery. We stay reachable for questions, handle recurring filings on schedule, and follow up so nothing you paid for goes unused.",
    icon: "LifeBuoy",
  },
];
