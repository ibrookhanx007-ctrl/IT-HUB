import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { usServices } from "@/content/us-services";
import { usCorporateContent } from "@/content/us-corporate";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { UsMotif } from "@/components/ui/us-motif";
import { UsServiceCard } from "@/components/sections/us-service-card";

interface UsServicesGridProps {
  /** "h1" on the dedicated landing page, "h2" when embedded in another page. */
  headingAs?: "h1" | "h2";
}

function UsServicesGrid({ headingAs: Heading = "h2" }: UsServicesGridProps) {
  const { heading, pageHeading, subtitle, intro } = usCorporateContent;
  const isPage = Heading === "h1";
  const lastIndex = usServices.length - 1;

  return (
    <Section className="relative flex flex-col gap-12 overflow-hidden">
      <UsMotif />

      <AnimateIn className="relative flex flex-col gap-4">
        {isPage && <p className="text-h4 text-gold-ink">{heading}</p>}
        <Heading className={isPage ? "text-h1" : "text-h2"}>
          {isPage ? pageHeading : heading}
        </Heading>
        <p className="text-body max-w-3xl">{subtitle}</p>
        <p className="text-body max-w-3xl font-medium text-ink-primary">
          {intro}
        </p>
        {!isPage && (
          <Link
            href={`/${usCorporateContent.slug}`}
            className="text-small inline-flex w-fit items-center gap-2 rounded-sm font-medium text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
          >
            {usCorporateContent.exploreLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </AnimateIn>

      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usServices.map((service, index) => (
          <AnimateIn
            key={service.slug}
            delay={(index % 3) * STAGGER_STEP_SECONDS}
            // Centers the 10th card under the 3-column grid instead of
            // leaving it stranded at the left edge.
            className={index === lastIndex ? "lg:col-start-2" : undefined}
          >
            <UsServiceCard service={service} />
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}

export { UsServicesGrid };
