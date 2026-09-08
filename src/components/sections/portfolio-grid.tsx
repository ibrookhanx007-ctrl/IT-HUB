"use client";
// Filtering updates the URL's ?service= query param (via the router,
// not a form submit) so the filtered view stays client-side yet
// shareable — needs router/search-params access.

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { portfolioItems } from "@/content/portfolio";
import { services } from "@/content/services";
import { portfolioPageIntro } from "@/content/pages";
import { STAGGER_STEP_SECONDS, cardHoverClassName } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimateIn } from "@/components/ui/animate-in";

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

      {filteredItems.length === 0 ? (
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
                      className="aspect-video w-full object-cover"
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
