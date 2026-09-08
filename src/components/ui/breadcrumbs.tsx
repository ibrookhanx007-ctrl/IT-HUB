import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { getBreadcrumbSchema } from "@/lib/structured-data";
import { Section } from "@/components/ui/section";
import { JsonLd } from "@/components/ui/json-ld";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  /** Trail after Home, e.g. [{ label: "Services", href: "/services" }]. */
  items: BreadcrumbItem[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(trail)} />

      <Section as="nav" aria-label="Breadcrumb" className="pb-0">
        <ol className="text-small flex flex-wrap items-center gap-2 text-ink-muted">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-ink-secondary">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-sm hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Section>
    </>
  );
}

export { Breadcrumbs };
