"use client";
// Filtering updates the URL's ?service= query param (via the router,
// not a form submit) so the filtered view stays client-side yet
// shareable — needs router/search-params access.

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { ServiceCategory } from "@/types";
import { portfolioItems } from "@/content/portfolio";
import { services } from "@/content/services";
import { portfolioPageIntro } from "@/content/pages";
import { STAGGER_STEP_SECONDS, cardHoverClassName } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { AnimateIn } from "@/components/ui/animate-in";

const CATEGORIES: ServiceCategory[] = ["IT & Digital Services", "Tax Services"];

function PortfolioGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeService = searchParams.get("service");

  const usedSlugs = Array.from(
    new Set(portfolioItems.map((item) => item.service)),
  );
  const filters = usedSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service) => service !== undefined);

  const filteredItems = activeService
    ? portfolioItems.filter((item) => item.service === activeService)
    : portfolioItems;

  function setFilter(slug: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("service", slug);
    } else {
      params.delete("service");
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  return (
    <div className="flex flex-col gap-10">
      {portfolioItems.length > 0 && (
        <div
          role="group"
          aria-label="Filter case studies by service"
          className="flex flex-wrap gap-3"
        >
          <Button
            type="button"
            variant={activeService ? "outline" : "default"}
            size="sm"
            onClick={() => setFilter(null)}
          >
            {portfolioPageIntro.filterAllLabel}
          </Button>
          {filters.map((service) => (
            <Button
              key={service.slug}
              type="button"
              variant={activeService === service.slug ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(service.slug)}
            >
              {service.title}
            </Button>
          ))}
        </div>
      )}

      {portfolioItems.length === 0 ? (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-h3">{portfolioPageIntro.emptyState.heading}</h2>
            <p className="text-body max-w-2xl text-ink-secondary">
              {portfolioPageIntro.emptyState.description}
            </p>
          </div>

          {CATEGORIES.map((category) => {
            const categoryServices = services.filter(
              (service) => service.category === category,
            );
            if (categoryServices.length === 0) return null;

            return (
              <div key={category} className="flex flex-col gap-4">
                <h3 className="text-h4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-navy-600 bg-navy-800 px-4 py-2 text-small font-medium text-ink-secondary transition-colors hover:border-gold hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
                    >
                      <Icon
                        name={service.icon}
                        className="size-4 text-gold-ink"
                        aria-hidden="true"
                      />
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <Button asChild size="lg" className="w-fit">
            <Link href={portfolioPageIntro.emptyState.ctaHref}>
              {portfolioPageIntro.emptyState.ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      ) : filteredItems.length === 0 ? (
        <p className="text-body text-ink-secondary">
          {portfolioPageIntro.emptyStateMessage}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => {
            const service = services.find((s) => s.slug === item.service);
            return (
              <AnimateIn key={item.slug} delay={index * STAGGER_STEP_SECONDS}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group block rounded-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
                >
                  <Card
                    className={cn(
                      cardHoverClassName,
                      "h-full gap-0 overflow-hidden py-0",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.clientName}
                      width={400}
                      height={240}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex flex-col gap-2 p-6">
                      <h3 className="text-h4">{item.clientName}</h3>
                      <p className="text-small text-ink-secondary">
                        {item.industry}
                        {service ? ` · ${service.title}` : ""}
                      </p>
                    </div>
                  </Card>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { PortfolioGrid };
