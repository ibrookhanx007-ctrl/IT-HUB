import Link from "next/link";

import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { Section } from "@/components/ui/section";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-600 bg-navy-800">
      <Section
        as="div"
        className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="flex flex-col gap-4">
          <span className="text-h4">{siteConfig.name}</span>
          <p className="text-small text-ink-secondary">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-small font-semibold tracking-wide text-ink-primary uppercase">
            {siteConfig.footer.columns.services}
          </h3>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-small rounded-sm text-ink-secondary hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-small font-semibold tracking-wide text-ink-primary uppercase">
            {siteConfig.footer.columns.quickLinks}
          </h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small rounded-sm text-ink-secondary hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-small font-semibold tracking-wide text-ink-primary uppercase">
            {siteConfig.footer.columns.contact}
          </h3>
          <address className="text-small flex flex-col gap-2 text-ink-secondary not-italic">
            <span>
              {siteConfig.contact.address.line1},{" "}
              {siteConfig.contact.address.city},{" "}
              {siteConfig.contact.address.region},{" "}
              {siteConfig.contact.address.country}
            </span>
            <span>{siteConfig.contact.phone}</span>
            <span>{siteConfig.contact.email}</span>
          </address>
        </div>
      </Section>

      <div className="border-t border-navy-600">
        <Section
          as="div"
          className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-small text-ink-muted">
            © {year} {siteConfig.name}. {siteConfig.footer.copyrightSuffix}
          </p>
          <ul className="flex gap-6">
            {siteConfig.footer.legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small rounded-sm text-ink-muted hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </footer>
  );
}

export { Footer };
