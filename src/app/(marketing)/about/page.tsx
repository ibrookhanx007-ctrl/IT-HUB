import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { aboutContent } from "@/content/about";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AnimateIn } from "@/components/ui/animate-in";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { Team } from "@/components/sections/team";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: aboutContent.seo.title,
    description: aboutContent.seo.description,
    alternates: { canonical: "/about" },
  };
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <Section className="flex flex-col gap-4 pb-0">
        <AnimateIn className="flex flex-col gap-4">
          <h1 className="text-h1">{aboutContent.hero.heading}</h1>
          <p className="text-h3 text-ink-secondary">{siteConfig.slogan}</p>
          <p className="text-body max-w-2xl">{aboutContent.hero.description}</p>
        </AnimateIn>
      </Section>

      <Section className="flex flex-col gap-6">
        <AnimateIn>
          <h2 className="text-h2">{aboutContent.story.heading}</h2>
        </AnimateIn>
        <div className="flex flex-col gap-4">
          {aboutContent.story.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body max-w-3xl">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section as="div" className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AnimateIn className="flex flex-col gap-3 rounded-xl border-2 border-gold bg-navy-800 p-8">
          <h2 className="text-h3">{aboutContent.mission.heading}</h2>
          <p className="text-body">{aboutContent.mission.statement}</p>
        </AnimateIn>
        <AnimateIn
          delay={STAGGER_STEP_SECONDS}
          className="flex flex-col gap-3 rounded-xl border-2 border-gold bg-navy-800 p-8"
        >
          <h2 className="text-h3">{aboutContent.vision.heading}</h2>
          <p className="text-body">{aboutContent.vision.statement}</p>
        </AnimateIn>
      </Section>

      <Section className="flex flex-col gap-10">
        <AnimateIn>
          <h2 className="text-h2">{aboutContent.values.heading}</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutContent.values.items.map((value, index) => (
            <AnimateIn
              key={value.title}
              delay={index * STAGGER_STEP_SECONDS}
              className="flex flex-col gap-3"
            >
              <Icon
                name={value.icon}
                className="size-8 text-gold"
                aria-hidden="true"
              />
              <h3 className="text-h4">{value.title}</h3>
              <p className="text-body">{value.description}</p>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <WhyChooseUs />

      <Team />

      <Process />

      <CtaBand />
    </>
  );
}
