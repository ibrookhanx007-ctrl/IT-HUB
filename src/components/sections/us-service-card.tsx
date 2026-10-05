import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { UsService } from "@/types";
import { usCorporateContent } from "@/content/us-corporate";
import { cardHoverClassName } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface UsServiceCardProps {
  service: UsService;
  className?: string;
}

// The whole card is one link (a single tab stop); the "Learn more" row is
// the visible call to action, styled like the existing text-link buttons.
function UsServiceCard({ service, className }: UsServiceCardProps) {
  return (
    <Link
      href={`/${usCorporateContent.slug}/${service.slug}`}
      className={cn(
        "group block h-full rounded-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none",
        className,
      )}
    >
      <Card className={cn(cardHoverClassName, "h-full")}>
        <CardHeader className="h-full flex-col items-start gap-2 flex!">
          <span className="flex size-12 items-center justify-center rounded-lg border border-navy-600 bg-navy-900 transition-colors duration-300 group-hover:border-gold">
            <Icon
              name={service.icon}
              className="size-6 text-gold-ink"
              aria-hidden="true"
            />
          </span>
          <CardTitle as="h3" className="text-h4 mt-3">
            {service.title}
          </CardTitle>
          <CardDescription>{service.shortDescription}</CardDescription>
          <span className="text-small mt-auto inline-flex pt-3 items-center gap-2 font-medium text-gold-ink group-hover:text-gold-ink-hover">
            {usCorporateContent.learnMoreLabel}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </CardHeader>
      </Card>
    </Link>
  );
}

export { UsServiceCard };
