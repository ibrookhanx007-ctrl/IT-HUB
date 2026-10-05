import { Check } from "lucide-react";

import type { UsService } from "@/types";
import { usCorporateContent } from "@/content/us-corporate";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface UsServiceDetailProps {
  service: UsService;
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="text-body flex items-start gap-2">
          <Check
            className="mt-1 size-4 shrink-0 text-gold-ink"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Includes / audience / benefits / process for one US service page. The
// FAQ, CTA, and disclaimer are composed separately by the page.
function UsServiceDetail({ service }: UsServiceDetailProps) {
  const { detail } = usCorporateContent;

  return (
    <>
      <Section as="div" className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimateIn className="flex flex-col gap-4 rounded-xl border border-navy-600 bg-navy-800 p-6">
          <h2 className="text-h3">{detail.includesHeading}</h2>
          <CheckList items={service.includes} />
        </AnimateIn>
        <AnimateIn
          delay={STAGGER_STEP_SECONDS}
          className="flex flex-col gap-4 rounded-xl border border-navy-600 bg-navy-800 p-6"
        >
          <h2 className="text-h3">{detail.audienceHeading}</h2>
          <CheckList items={service.audience} />
        </AnimateIn>
      </Section>

      <Section className="flex flex-col gap-8 pt-0 md:pt-0">
        <AnimateIn>
          <h2 className="text-h3">{detail.benefitsHeading}</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit, index) => (
            <AnimateIn
              key={benefit.title}
              delay={index * STAGGER_STEP_SECONDS}
              className="h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle as="h3" className="text-h4">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section className="flex flex-col gap-8 pt-0 md:pt-0">
        <AnimateIn>
          <h2 className="text-h3">{detail.processHeading}</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, index) => (
            <AnimateIn
              key={step.title}
              delay={(index % 3) * STAGGER_STEP_SECONDS}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-2 rounded-xl border border-navy-600 bg-navy-800 p-6">
                <span className="text-small font-semibold tracking-wide text-gold-ink uppercase">
                  {detail.stepLabel} {index + 1}
                </span>
                <h3 className="text-h4">{step.title}</h3>
                <p className="text-body">{step.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>
    </>
  );
}

export { UsServiceDetail };
