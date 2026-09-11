import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    slug: "ibrar-khan",
    name: "Ibrar Khan",
    role: "CEO",
    department: "IT Services",
    bio: "Leads IT HUB Corporation's IT and digital work end to end — software development, IT infrastructure, e-commerce, and digital marketing.",
    photo: "/team/ibrar-khan.webp",
    phone: "0317 9898769",
    expertise: [
      "it-software-solutions",
      "ecommerce-solutions",
      "digital-marketing",
      "graphic-design",
      "pos-invoicing",
    ],
  },
  {
    slug: "azlan-manzoor",
    name: "Azlan Manzoor",
    role: "Founder",
    department: "Tax Services",
    bio: "Handles all tax-related matters for clients — FBR and KPRA compliance, filings, and accounting.",
    photo: "/team/azlan-manzoor.webp",
    phone: "0313 1541054",
    expertise: [
      "tax-accounting",
      "fbr-kpra-compliance",
      "accounting-financial-services",
      "business-registration",
      "appeals-legal-support",
    ],
  },
];
