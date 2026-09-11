import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeContent } from "@/content/home";
import {
  STAGGER_STEP_SECONDS,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

function AboutPreview() {
  const { heading, paragraph, cta, highlights } = homeContent.aboutPreview;

  return (
    <Section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <AnimateIn variant={slideInLeft} className="flex flex-col gap-6">
        <h2 className="text-h2">{heading}</h2>
        <p className="text-body max-w-2xl">{paragraph}</p>
        <Link
          href={cta.href}
          className="text-body inline-flex w-fit items-center gap-2 rounded-sm font-medium text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
        >
          {cta.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </AnimateIn>

      <AnimateIn variant={slideInRight} delay={STAGGER_STEP_SECONDS}>
        <Card>
          <CardContent className="flex flex-col gap-5">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-800">
                  <Icon
                    name={item.icon}
                    className="size-5 text-gold-ink"
                    aria-hidden="true"
                  />
                </span>
                <p className="text-body font-medium text-ink-primary">
                  {item.label}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </AnimateIn>
    </Section>
  );
}

export { AboutPreview };
