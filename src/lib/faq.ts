import { faqItems } from "@/content/faq";
import type { FaqCategory, FaqItem } from "@/types";

// Which FAQ category best answers questions about each service — used
// to show a short, relevant excerpt on the service detail page instead
// of repeating the full FAQ list. Services without a specific match
// (design/marketing) fall back to "General".
const SERVICE_FAQ_CATEGORY: Record<string, FaqCategory> = {
  "tax-accounting": "Tax & Compliance",
  "fbr-kpra-compliance": "Tax & Compliance",
  "business-registration": "Tax & Compliance",
  "appeals-legal-support": "Tax & Compliance",
  "accounting-financial-services": "Tax & Compliance",
  "it-software-solutions": "IT Services",
  "ecommerce-solutions": "IT Services",
  "pos-invoicing": "IT Services",
};

const MAX_ITEMS = 5;

/** Up to 5 FAQ items relevant to a service, padded with General items. */
export function getServiceFaqItems(serviceSlug: string): FaqItem[] {
  const category = SERVICE_FAQ_CATEGORY[serviceSlug] ?? "General";
  const matched = faqItems.filter((item) => item.category === category);
  const padding = faqItems.filter(
    (item) => item.category === "General" && !matched.includes(item),
  );
  return [...matched, ...padding].slice(0, MAX_ITEMS);
}
