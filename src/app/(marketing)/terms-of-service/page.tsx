import type { Metadata } from "next";

// See src/content/legal.ts — this is a template describing what the
// site actually does, not lawyer-reviewed legal advice. Have counsel
// review before launch.
import { termsOfService } from "@/content/legal";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: termsOfService.seo.title,
    description: termsOfService.seo.description,
    alternates: { canonical: "/terms-of-service" },
  };
}

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Terms of Service", href: "/terms-of-service" }]}
      />

      <Section className="flex flex-col gap-4 pb-0">
        <h1 className="text-h1">{termsOfService.heading}</h1>
        <p className="text-small text-ink-muted">
          {termsOfService.lastUpdated}
        </p>
        <p className="text-body max-w-2xl">{termsOfService.intro}</p>
      </Section>

      <Section as="div" className="flex flex-col gap-10">
        {termsOfService.sections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-3">
            <h2 className="text-h4">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-body max-w-3xl">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </Section>
    </>
  );
}
