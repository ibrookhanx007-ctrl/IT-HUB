import Link from "next/link";

import { notFoundContent } from "@/content/pages";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center gap-6 py-32 text-center">
      <p className="text-h1 text-gold">404</p>
      <h1 className="text-h2">{notFoundContent.heading}</h1>
      <p className="text-body max-w-md">{notFoundContent.description}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href={notFoundContent.homeCta.href}>
            {notFoundContent.homeCta.label}
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={notFoundContent.servicesCta.href}>
            {notFoundContent.servicesCta.label}
          </Link>
        </Button>
      </div>
    </Section>
  );
}
