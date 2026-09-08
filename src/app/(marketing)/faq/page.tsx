import type { Metadata } from "next";

import { faqItems } from "@/content/faq";
import { faqPageIntro } from "@/content/pages";
import { getFaqSchema } from "@/lib/structured-data";
import { Section } from "@/components/ui/section";
import { JsonLd } from "@/components/ui/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: faqPageIntro.seo.title,
    description: faqPageIntro.seo.description,
    alternates: { canonical: "/faq" },
  };
}

// Category order as questions naturally progress: how to start, then
// compliance and technical detail, then price.
const CATEGORY_ORDER = [
  "General",
  "Tax & Compliance",
  "IT Services",
  "Pricing",
] as const;

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(faqItems)} />

      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

      <Section className="flex flex-col gap-4 pb-0">
        <AnimateIn className="flex flex-col gap-4">
          <h1 className="text-h1">{faqPageIntro.hero.heading}</h1>
          <p className="text-body max-w-2xl">{faqPageIntro.hero.description}</p>
        </AnimateIn>
      </Section>

      <Section as="div" className="flex flex-col gap-12">
        {CATEGORY_ORDER.map((category) => {
          const items = faqItems.filter((item) => item.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="flex flex-col gap-4">
              <AnimateIn>
                <h2 className="text-h3">{category}</h2>
              </AnimateIn>
              <Accordion type="single" collapsible className="w-full">
                {items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="border-navy-600"
                  >
                    <AccordionTrigger className="text-body text-left font-semibold text-ink-primary hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-ink-secondary">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          );
        })}
      </Section>
    </>
  );
}
