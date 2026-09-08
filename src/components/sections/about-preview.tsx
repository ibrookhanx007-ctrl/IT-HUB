import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeContent } from "@/content/home";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

function AboutPreview() {
  const { heading, paragraph, cta } = homeContent.aboutPreview;

  return (
    <Section>
      <AnimateIn className="flex flex-col gap-6">
        <h2 className="text-h2">{heading}</h2>
        <p className="text-body max-w-2xl">{paragraph}</p>
        <Link
          href={cta.href}
          className="text-body inline-flex w-fit items-center gap-2 rounded-sm font-medium text-gold hover:text-gold-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
        >
          {cta.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </AnimateIn>
    </Section>
  );
}

export { AboutPreview };
