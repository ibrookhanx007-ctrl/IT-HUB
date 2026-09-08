import type { Metadata } from "next";

// See src/content/legal.ts — this is a template describing what the
// site actually does, not lawyer-reviewed legal advice. Have counsel
// review before launch.
import { privacyPolicy } from "@/content/legal";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: privacyPolicy.seo.title,
    description: privacyPolicy.seo.description,
    alternates: { canonical: "/privacy-policy" },
  };
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <Section className="flex flex-col gap-4 pb-0">
        <h1 className="text-h1">{privacyPolicy.heading}</h1>
        <p className="text-small text-ink-muted">{privacyPolicy.lastUpdated}</p>
        <p className="text-body max-w-2xl">{privacyPolicy.intro}</p>
      </Section>

      <Section as="div" className="flex flex-col gap-10">
        {privacyPolicy.sections.map((section) => (
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
