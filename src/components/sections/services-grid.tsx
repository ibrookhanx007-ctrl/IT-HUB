import Link from "next/link";

import { services } from "@/content/services";
import { homeContent } from "@/content/home";
import { STAGGER_STEP_SECONDS, cardHoverClassName } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function ServicesGrid() {
  return (
    <Section className="flex flex-col gap-12">
      <AnimateIn className="flex flex-col gap-4">
        <h2 className="text-h2">{homeContent.servicesSection.heading}</h2>
        <p className="text-body max-w-2xl">
          {homeContent.servicesSection.description}
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <AnimateIn key={service.slug} delay={index * STAGGER_STEP_SECONDS}>
            <Link
              href={`/services/${service.slug}`}
              className="group block rounded-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
            >
              <Card className={cn(cardHoverClassName, "h-full")}>
                <CardHeader>
                  <Icon
                    name={service.icon}
                    className="size-8 text-gold"
                    aria-hidden="true"
                  />
                  <CardTitle as="h3" className="text-h4 mt-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}

export { ServicesGrid };
