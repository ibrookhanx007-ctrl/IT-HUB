import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ServiceCategory } from "@/types";
import { services } from "@/content/services";
import { servicesPageIntro } from "@/content/pages";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AnimateIn } from "@/components/ui/animate-in";

const CATEGORIES: ServiceCategory[] = ["IT & Digital Services", "Tax Services"];

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
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <Section className="flex flex-col gap-4 pb-0">
        <AnimateIn className="flex flex-col gap-4">
          <h1 className="text-h1">{servicesPageIntro.hero.heading}</h1>
          <p className="text-body max-w-2xl">
            {servicesPageIntro.hero.description}
          </p>
        </AnimateIn>
      </Section>

      {CATEGORIES.map((category) => {
        const categoryServices = services.filter(
          (service) => service.category === category,
        );
        if (categoryServices.length === 0) return null;

        return (
          <Section key={category} className="flex flex-col gap-6">
            <AnimateIn>
              <h2 className="text-h2">{category}</h2>
            </AnimateIn>
            <div className="flex flex-col">
              {categoryServices.map((service, index) => (
                <AnimateIn
                  key={service.slug}
                  delay={Math.min(index, 5) * STAGGER_STEP_SECONDS}
                  className="flex flex-col gap-4 border-b border-navy-600 py-10 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:gap-8"
                >
                  <Icon
                    name={service.icon}
                    className="size-10 shrink-0 text-gold-ink"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-h3">{service.title}</h3>
                    <p className="text-body font-medium text-ink-primary">
                      {service.shortDescription}
                    </p>
                    <p className="text-body">{service.longDescription[0]}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex w-fit items-center gap-2 rounded-sm font-medium text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
                    >
                      {servicesPageIntro.learnMoreLabel}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
