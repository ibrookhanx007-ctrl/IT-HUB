import type { Metadata } from "next";

import { usCorporateContent } from "@/content/us-corporate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UsServicesGrid } from "@/components/sections/us-services-grid";
import { UsDisclaimer } from "@/components/sections/us-disclaimer";
import { UsCta } from "@/components/sections/us-cta";

export async function generateMetadata(): Promise<Metadata> {
  const { seo, slug } = usCorporateContent;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `/${slug}` },
  };
}

export default function UsCorporateServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: usCorporateContent.detail.breadcrumbLabel,
            href: `/${usCorporateContent.slug}`,
          },
        ]}
      />
      <UsServicesGrid headingAs="h1" />
      <UsDisclaimer />
      <UsCta />
    </>
  );
}
