import Link from "next/link";

import { siteConfig } from "@/content/site";
import { usCorporateContent } from "@/content/us-corporate";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

interface UsCtaProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  /** Slug of a service to preselect in the contact form. */
  serviceSlug?: string;
}

// Same gold band as CtaBand, with the primary + secondary button pair the
// US section calls for. Both buttons go to the existing contact form.
function UsCta({
  heading,
  description,
  primaryLabel,
  serviceSlug,
}: UsCtaProps) {
  const { cta } = usCorporateContent;
  const contactHref = siteConfig.primaryCta.href;
  const primaryHref = serviceSlug
    ? `${contactHref}?service=${serviceSlug}`
    : contactHref;

  return (
    <div className="bg-gold">
      <Section
        as="div"
        className="flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between"
      >
        <AnimateIn className="flex flex-col gap-2">
          <h2 className="text-h2 text-ink-on-accent">
            {heading ?? cta.heading}
          </h2>
          <p className="text-body max-w-xl text-ink-on-accent/80">
            {description ?? cta.description}
          </p>
        </AnimateIn>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-navy-900 text-ink-primary hover:bg-navy-800"
          >
            <Link href={primaryHref}>{primaryLabel ?? cta.primaryLabel}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ink-on-accent bg-transparent text-ink-on-accent hover:bg-ink-on-accent/10 hover:text-ink-on-accent dark:border-ink-on-accent dark:bg-transparent dark:hover:bg-ink-on-accent/10"
          >
            <Link href={contactHref}>{cta.secondaryLabel}</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}

export { UsCta };
