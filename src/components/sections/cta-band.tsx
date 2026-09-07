import Link from "next/link";

import { siteConfig } from "@/content/site";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

function CtaBand() {
  return (
    <div className="bg-gold">
      <Section
        as="div"
        className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-h2 text-navy-900">
            {homeContent.ctaBand.heading}
          </h2>
          <p className="text-body max-w-xl text-navy-900/80">
            {homeContent.ctaBand.description}
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="shrink-0 bg-navy-900 text-ink-primary hover:bg-navy-800"
        >
          <Link href={siteConfig.primaryCta.href}>
            {siteConfig.primaryCta.label}
          </Link>
        </Button>
      </Section>
    </div>
  );
}

export { CtaBand };
