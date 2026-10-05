import { usCorporateContent } from "@/content/us-corporate";
import { Section } from "@/components/ui/section";

function UsDisclaimer() {
  return (
    <Section as="div" className="py-10 md:py-12">
      <aside
        aria-label={usCorporateContent.disclaimerHeading}
        className="rounded-xl border border-navy-600 bg-navy-800 p-6"
      >
        <h2 className="text-small font-semibold tracking-wide text-ink-primary uppercase">
          {usCorporateContent.disclaimerHeading}
        </h2>
        <p className="text-small mt-2 max-w-4xl text-ink-secondary">
          {usCorporateContent.disclaimer}
        </p>
      </aside>
    </Section>
  );
}

export { UsDisclaimer };
