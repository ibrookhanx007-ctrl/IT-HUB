import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { services } from "@/content/services";
import { serviceDetailLabels } from "@/content/pages";
import { getServiceSchema } from "@/lib/structured-data";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/ui/json-ld";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

function getRelatedServices(slug: string) {
  const index = services.findIndex((service) => service.slug === slug);
  const total = services.length;
  return [1, 2, 3].map((offset) => services[(index + offset) % total]);
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug);

  return (
    <>
      <JsonLd data={getServiceSchema(service)} />

      <Section className="flex flex-col gap-6 pb-0">
        <Icon
          name={service.icon}
          className="size-12 text-gold"
          aria-hidden="true"
        />
        <h1 className="text-h1 max-w-3xl">{service.title}</h1>
        <p className="text-h4 max-w-2xl font-normal text-ink-secondary">
          {service.shortDescription}
        </p>
      </Section>

      <Section as="div" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {service.longDescription.map((paragraph) => (
            <p key={paragraph} className="text-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-navy-600 bg-navy-800 p-6">
          <h2 className="text-h4">{serviceDetailLabels.deliverablesHeading}</h2>
          <ul className="flex flex-col gap-3">
            {service.deliverables.map((item) => (
              <li key={item} className="text-body flex items-start gap-2">
                <Check
                  className="mt-1 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="flex flex-col gap-8">
        <h2 className="text-h3">{serviceDetailLabels.relatedHeading}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((relatedService) => (
            <Link
              key={relatedService.slug}
              href={`/services/${relatedService.slug}`}
              className="group block rounded-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
            >
              <Card className="h-full transition-colors group-hover:border-gold">
                <CardHeader>
                  <Icon
                    name={relatedService.icon}
                    className="size-8 text-gold"
                    aria-hidden="true"
                  />
                  <CardTitle as="h3" className="text-h4 mt-2">
                    {relatedService.title}
                  </CardTitle>
                  <CardDescription>
                    {relatedService.shortDescription}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        heading={`Interested in ${service.title}?`}
        description="Get in touch and we'll walk you through the details."
      />
    </>
  );
}
