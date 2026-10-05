import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { usServices } from "@/content/us-services";
import { usCorporateContent } from "@/content/us-corporate";
import { serviceDetailLabels } from "@/content/pages";
import { getFaqSchema, getUsServiceSchema } from "@/lib/structured-data";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/ui/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AnimateIn } from "@/components/ui/animate-in";
import { UsMotif } from "@/components/ui/us-motif";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { UsServiceCard } from "@/components/sections/us-service-card";
import { UsServiceDetail } from "@/components/sections/us-service-detail";
import { UsDisclaimer } from "@/components/sections/us-disclaimer";
import { UsCta } from "@/components/sections/us-cta";

const { slug: hubSlug, detail } = usCorporateContent;

export function generateStaticParams() {
  return usServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/us-corporate-services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = usServices.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/${hubSlug}/${service.slug}` },
  };
}

function getRelatedServices(slug: string) {
  const index = usServices.findIndex((service) => service.slug === slug);
  return [1, 2, 3].map(
    (offset) => usServices[(index + offset) % usServices.length],
  );
}

export default async function UsServiceDetailPage(
  props: PageProps<"/us-corporate-services/[slug]">,
) {
  const { slug } = await props.params;
  const service = usServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getUsServiceSchema(service)} />
      <JsonLd data={getFaqSchema(service.faqs)} />

      <Breadcrumbs
        items={[
          { label: detail.breadcrumbLabel, href: `/${hubSlug}` },
          { label: service.title, href: `/${hubSlug}/${service.slug}` },
        ]}
      />

      <Section className="relative flex flex-col gap-6 overflow-hidden pb-0">
        <UsMotif />
        <AnimateIn className="relative flex flex-col gap-6">
          <Icon
            name={service.icon}
            role="img"
            aria-label={service.visualAlt}
            className="size-12 text-gold-ink"
          />
          <h1 className="text-h1 max-w-3xl">{service.headline}</h1>
          <p className="text-h4 max-w-3xl font-normal text-ink-secondary">
            {service.intro}
          </p>
        </AnimateIn>
      </Section>

      <UsServiceDetail service={service} />

      <Section className="flex flex-col gap-6 pt-0 md:pt-0">
        <AnimateIn className="flex items-center justify-between gap-4">
          <h2 className="text-h3">{detail.faqHeading}</h2>
          <Link
            href="/faq"
            className="text-small inline-flex w-fit shrink-0 items-center gap-2 rounded-sm font-medium text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
          >
            {serviceDetailLabels.faqViewAllLabel}
          </Link>
        </AnimateIn>
        <Accordion type="single" collapsible className="w-full">
          {service.faqs.map((item) => (
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
      </Section>

      <UsDisclaimer />

      <Section className="flex flex-col gap-8 pt-0 md:pt-0">
        <AnimateIn>
          <h2 className="text-h3">{detail.relatedHeading}</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {getRelatedServices(service.slug).map((related, index) => (
            <AnimateIn key={related.slug} delay={index * STAGGER_STEP_SECONDS}>
              <UsServiceCard service={related} />
            </AnimateIn>
          ))}
        </div>
      </Section>

      <UsCta
        heading={detail.ctaHeadingTemplate.replace("{title}", service.title)}
        description={detail.ctaDescription}
        primaryLabel={detail.ctaPrimaryLabel}
        serviceSlug={service.slug}
      />
    </>
  );
}
