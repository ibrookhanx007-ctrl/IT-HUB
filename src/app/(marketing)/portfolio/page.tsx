import type { Metadata } from "next";
import { Suspense } from "react";

import { portfolioPageIntro } from "@/content/pages";
import { Section } from "@/components/ui/section";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: portfolioPageIntro.seo.title,
    description: portfolioPageIntro.seo.description,
    alternates: { canonical: "/portfolio" },
  };
}

export default function PortfolioPage() {
  return (
    <>
      <Section className="flex flex-col gap-4 pb-0">
        <h1 className="text-h1">{portfolioPageIntro.hero.heading}</h1>
        <p className="text-body max-w-2xl">
          {portfolioPageIntro.hero.description}
        </p>
      </Section>

      <Section as="div">
        {/* useSearchParams (inside PortfolioGrid) opts the subtree out of
            static rendering unless wrapped in Suspense. */}
        <Suspense>
          <PortfolioGrid />
        </Suspense>
      </Section>
    </>
  );
}
