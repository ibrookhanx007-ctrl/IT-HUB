import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-600 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/80">
      <Section
        as="div"
        className="flex items-center justify-between py-3 md:py-4"
      >
        <Link
          href="/"
          className="text-h4 flex items-center gap-2.5 rounded-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={585}
            height={480}
            priority
            className="h-8 w-auto"
          />
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-small rounded-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden lg:block">
            <Button asChild>
              <Link href={siteConfig.primaryCta.href}>
                {siteConfig.primaryCta.label}
              </Link>
            </Button>
          </div>

          <MobileNav />
        </div>
      </Section>
    </header>
  );
}

export { Header };
