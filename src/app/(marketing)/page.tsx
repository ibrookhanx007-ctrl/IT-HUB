import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { AboutPreview } from "@/components/sections/about-preview";
import { CtaBand } from "@/components/sections/cta-band";

// No title here — inherits the root layout's `default` title so the
// homepage shows the full "<name> — <tagline>" rather than duplicating
// the name through the "%s | <name>" template.
export async function generateMetadata(): Promise<Metadata> {
  return {
    description: siteConfig.description,
    alternates: { canonical: "/" },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <Process />
      <CtaBand />
    </>
  );
}
