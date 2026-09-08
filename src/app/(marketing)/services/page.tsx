import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/content/services";
import { servicesPageIntro } from "@/content/pages";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: servicesPageIntro.seo.title,
    description: servicesPageIntro.seo.description,
    alternates: { canonical: "/services" },
  };
}

export default function ServicesPage() {
  return (
    <>
      <Section className="flex flex-col gap-4 pb-0">
        <h1 className="text-h1">{servicesPageIntro.hero.heading}</h1>
        <p className="text-body max-w-2xl">
          {servicesPageIntro.hero.description}
        </p>
      </Section>

      <Section as="div" className="flex flex-col">
        {services.map((service) => (
          <article
            key={service.slug}
            className="flex flex-col gap-4 border-b border-navy-600 py-10 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:gap-8"
          >
            <Icon
              name={service.icon}
              className="size-10 shrink-0 text-gold"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-h3">{service.title}</h2>
              <p className="text-body font-medium text-ink-primary">
                {service.shortDescription}
              </p>
              <p className="text-body">{service.longDescription[0]}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex w-fit items-center gap-2 rounded-sm font-medium text-gold hover:text-gold-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
              >
                {servicesPageIntro.learnMoreLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </Section>
    </>
  );
}
