import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { portfolioItems } from "@/content/portfolio";
import { services } from "@/content/services";
import { portfolioDetailLabels } from "@/content/pages";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/portfolio/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.clientName} Case Study`,
    description: item.result,
    alternates: { canonical: `/portfolio/${item.slug}` },
  };
}

export default async function PortfolioDetailPage(
  props: PageProps<"/portfolio/[slug]">,
) {
  const { slug } = await props.params;
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const service = services.find((entry) => entry.slug === item.service);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Portfolio", href: "/portfolio" },
          { label: item.clientName, href: `/portfolio/${item.slug}` },
        ]}
      />

      <Section className="flex flex-col gap-4 pb-0">
        <Link
          href="/portfolio"
          className="text-small inline-flex w-fit items-center gap-2 rounded-sm font-medium text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {portfolioDetailLabels.backLabel}
        </Link>
        <h1 className="text-h1">{item.clientName}</h1>
        <p className="text-body text-ink-secondary">{item.industry}</p>
      </Section>

      <Section as="div" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <Image
            src={item.image}
            alt={item.clientName}
            width={800}
            height={480}
            className="aspect-video w-full rounded-xl object-cover"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-h4">
              {portfolioDetailLabels.challengeHeading}
            </h2>
            <p className="text-body">{item.challenge}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-h4">{portfolioDetailLabels.solutionHeading}</h2>
            <p className="text-body">{item.solution}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-h4">{portfolioDetailLabels.resultHeading}</h2>
            <p className="text-body">{item.result}</p>
          </div>
        </div>

        {service && (
          <div className="flex flex-col gap-3 rounded-xl border border-navy-600 bg-navy-800 p-6">
            <h2 className="text-h4">
              {portfolioDetailLabels.relatedServiceLabel}
            </h2>
            <Link
              href={`/services/${service.slug}`}
              className="text-body inline-flex w-fit items-center gap-2 rounded-sm font-medium text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
            >
              {service.title}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </Section>

      <CtaBand />
    </>
  );
}
