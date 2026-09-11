import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";

import { teamMembers } from "@/content/team";
import { services } from "@/content/services";
import { STAGGER_STEP_SECONDS, cardHoverClassName } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
        <AnimateIn>
          <Image
            src={member.photo}
            alt={member.name}
            width={400}
            height={400}
            className="aspect-square w-full rounded-xl object-cover"
          />
        </AnimateIn>

        <AnimateIn
          delay={STAGGER_STEP_SECONDS}
          className="flex flex-col gap-4 md:col-span-2"
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
          {member.bio && <p className="text-body max-w-2xl">{member.bio}</p>}
          {member.phone && (
            <Button asChild size="lg" className="w-fit">
              <a href={`tel:${member.phone.replace(/\s/g, "")}`}>
                <Phone className="size-4" aria-hidden="true" />
                {member.phone}
              </a>
            </Button>
          )}
        </AnimateIn>
      </Section>

      {expertise.length > 0 && (
        <Section className="flex flex-col gap-8">
          <AnimateIn>
            <h2 className="text-h3">Areas of Expertise</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((service, index) => (
              <AnimateIn
                key={service.slug}
                delay={index * STAGGER_STEP_SECONDS}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
                >
                  <Card className={cn(cardHoverClassName, "h-full")}>
                    <CardHeader>
                      <Icon
                        name={service.icon}
                        className="size-8 text-gold-ink"
                        aria-hidden="true"
                      />
                      <CardTitle as="h3" className="text-h4 mt-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription>
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                  </Card>
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
