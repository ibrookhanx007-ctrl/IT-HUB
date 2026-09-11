import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";

import { teamMembers } from "@/content/team";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AnimateIn } from "@/components/ui/animate-in";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata(
  props: PageProps<"/about/team/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const member = teamMembers.find((entry) => entry.slug === slug);

  if (!member) {
    return {};
  }

  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
    alternates: { canonical: `/about/team/${member.slug}` },
  };
}

export default async function TeamMemberPage(
  props: PageProps<"/about/team/[slug]">,
) {
  const { slug } = await props.params;
  const member = teamMembers.find((entry) => entry.slug === slug);

  if (!member) {
    notFound();
  }

  const about = member.about ?? (member.bio ? [member.bio] : []);
  const expertise = (member.expertise ?? [])
    .map((serviceSlug) => services.find((s) => s.slug === serviceSlug))
    .filter((service) => service !== undefined);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "About", href: "/about" },
          { label: member.name, href: `/about/team/${member.slug}` },
        ]}
      />

      <Section as="div" className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <AnimateIn className="flex flex-col gap-6">
          <Image
            src={member.photo}
            alt={member.name}
            width={400}
            height={400}
            className="aspect-square w-full rounded-xl object-cover"
          />

          <div className="flex flex-col gap-4 rounded-xl border border-navy-600 bg-navy-800 p-6">
            <h2 className="text-h4">Direct Contact</h2>
            {member.phone && (
              <a
                href={`tel:${member.phone.replace(/\s/g, "")}`}
                className="text-small inline-flex w-fit items-center gap-1.5 rounded-sm text-ink-secondary hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {member.phone}
              </a>
            )}
            <Button asChild className="w-full">
              <Link href={siteConfig.primaryCta.href}>
                {siteConfig.primaryCta.label}
              </Link>
            </Button>
          </div>
        </AnimateIn>

        <AnimateIn
          delay={STAGGER_STEP_SECONDS}
          className="flex flex-col gap-4 border-t border-navy-600 pt-8 md:col-span-2 md:border-t-0 md:pt-0"
        >
          {member.department && (
            <span className="text-small w-fit rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-semibold tracking-wide text-gold-ink uppercase">
              {member.department}
            </span>
          )}
          <h1 className="text-h1">{member.name}</h1>
          <p className="text-h4 font-normal text-ink-secondary">
            {member.role}
          </p>

          {about.length > 0 && (
            <div className="mt-4 flex flex-col gap-4 border-t border-navy-600 pt-6">
              <h2 className="text-h3">
                Professional Biography & Practice Overview
              </h2>
              {about.map((paragraph) => (
                <p key={paragraph} className="text-body max-w-2xl">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </AnimateIn>
      </Section>

      {expertise.length > 0 && (
        <Section className="flex flex-col gap-8">
          <AnimateIn>
            <h2 className="text-h3">Key Practice Areas & Competencies</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {expertise.map((service, index) => (
              <AnimateIn
                key={service.slug}
                delay={index * STAGGER_STEP_SECONDS}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-navy-800 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-gold-ink"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-body font-medium text-ink-primary">
                      {service.title}
                    </span>
                    <span className="text-small text-ink-secondary">
                      {service.shortDescription}
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        heading={`Want to talk to ${member.name}?`}
        description="Get in touch and we'll walk you through the details."
      />
    </>
  );
}
