import Link from "next/link";

import { siteConfig } from "@/content/site";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

function Hero() {
  return (
    <Section className="flex flex-col items-start gap-8 py-24 md:py-32">
      <p className="text-small font-semibold tracking-wide text-gold uppercase">
        {siteConfig.tagline}
      </p>

      <div className="flex flex-col gap-4">
        <h1 className="text-h1 max-w-3xl">{siteConfig.name}</h1>
        <p className="text-h3 max-w-2xl text-ink-secondary">
          {siteConfig.slogan}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href={homeContent.hero.primaryCta.href}>
            {homeContent.hero.primaryCta.label}
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={homeContent.hero.secondaryCta.href}>
            {homeContent.hero.secondaryCta.label}
          </Link>
        </Button>
      </div>
    </Section>
  );
}

export { Hero };
