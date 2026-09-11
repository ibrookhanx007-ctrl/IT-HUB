export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  city: string;
  role: string;
  /** 1-5. */
  rating: number;
  quote: string;
  /** A slug from src/content/services. */
  service: string;
  /** Optional path under public/, e.g. "/avatars/name.jpg". */
  avatar?: string;
}

export type FaqCategory =
  "General" | "Tax & Compliance" | "IT Services" | "Pricing";

export interface FaqItem {
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  /** lucide-react icon name. */
  icon: string;
}

export interface Stat {
  value: number;
  suffix: "+" | "%";
  label: string;
}

export interface PortfolioItem {
  slug: string;
  clientName: string;
  /** A slug from src/content/services. */
  service: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  /** Path under public/, e.g. "/portfolio/client-name.jpg". */
  image: string;
}

export interface TeamMember {
  /** URL segment for /about/team/[slug]. */
  slug: string;
  name: string;
  role: string;
  /** Service area shown as a badge above the name, e.g. "IT Services". */
  department?: string;
  /** One line, shown on the team card. */
  bio?: string;
  /** 1-2 paragraphs, shown as "Professional Biography" on the profile page. Falls back to bio. */
  about?: string[];
  /** Path under public/, e.g. "/team/name.jpg". */
  photo: string;
  /** Displayed as-is and used to build a tel: link, e.g. "0317 9898769". */
  phone?: string;
  /** Slugs from src/content/services this person handles, shown on their profile. */
  expertise?: string[];
  linkedin?: string;
}

export interface ClientLogo {
  name: string;
  /** Path under public/, e.g. "/clients/name.svg". */
  logo: string;
}
