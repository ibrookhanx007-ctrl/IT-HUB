import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { contactPageIntro, contactFieldLabels } from "@/content/pages";
import { Section } from "@/components/ui/section";
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

  return (
    <>
      <Section className="flex flex-col gap-4 pb-0">
        <h1 className="text-h1">{contactPageIntro.hero.heading}</h1>
        <p className="text-body max-w-2xl">
          {contactPageIntro.hero.description}
        </p>
      </Section>

      <Section as="div" className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-h4">{contactFieldLabels.address}</h2>
            <p className="text-body">
              {address.line1}, {address.city}, {address.region},{" "}
              {address.country}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-h4">{contactFieldLabels.phone}</h2>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-body w-fit rounded-sm text-gold hover:text-gold-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              {phone}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-h4">{contactFieldLabels.email}</h2>
            <a
              href={`mailto:${email}`}
              className="text-body w-fit rounded-sm text-gold hover:text-gold-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              {email}
            </a>
          </div>

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
        </div>

        <ContactForm />
      </Section>

      <Section as="div" className="pt-0">
        <OfficeMap />
      </Section>
    </>
  );
}
