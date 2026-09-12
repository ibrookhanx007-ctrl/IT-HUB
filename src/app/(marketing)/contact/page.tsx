import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { contactPageIntro, contactFieldLabels } from "@/content/pages";
import { isPlaceholder } from "@/lib/utils";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AnimateIn } from "@/components/ui/animate-in";
import { ContactForm } from "@/components/sections/contact-form";
import { OfficeMap } from "@/components/sections/office-map";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: contactPageIntro.seo.title,
    description: contactPageIntro.seo.description,
    alternates: { canonical: "/contact" },
  };
}

export default function ContactPage() {
  const { address, phone, email, hours } = siteConfig.contact;
  const hasStreet = !isPlaceholder(address.line1);
  const hasPhone = !isPlaceholder(phone);
  const hasEmail = !isPlaceholder(email);

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <Section className="flex flex-col gap-4 pb-0">
        <AnimateIn className="flex flex-col gap-4">
          <h1 className="text-h1">{contactPageIntro.hero.heading}</h1>
          <p className="text-body max-w-2xl">
            {contactPageIntro.hero.description}
          </p>
        </AnimateIn>
      </Section>

      <Section as="div" className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <AnimateIn className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-h4">{contactFieldLabels.address}</h2>
            <p className="text-body">
              {hasStreet && `${address.line1}, `}
              {address.city}, {address.region}, {address.country}
            </p>
          </div>

          {hasPhone && (
            <div className="flex flex-col gap-2">
              <h2 className="text-h4">{contactFieldLabels.phone}</h2>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-body w-fit rounded-sm text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              >
                {phone}
              </a>
            </div>
          )}

          {hasEmail && (
            <div className="flex flex-col gap-2">
              <h2 className="text-h4">{contactFieldLabels.email}</h2>
              <a
                href={`mailto:${email}`}
                className="text-body w-fit rounded-sm text-gold-ink hover:text-gold-ink-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              >
                {email}
              </a>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <h2 className="text-h4">{contactFieldLabels.hours}</h2>
            <ul className="flex flex-col gap-1">
              {hours.map((line) => (
                <li key={line} className="text-body">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>

        <AnimateIn delay={STAGGER_STEP_SECONDS}>
          <ContactForm />
        </AnimateIn>
      </Section>

      <Section as="div" className="pt-0">
        <AnimateIn>
          <OfficeMap />
        </AnimateIn>
      </Section>
    </>
  );
}
