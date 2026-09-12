"use client";
// Tracks scroll position to toggle a stronger shadow/border once the
// page scrolls past the top — a pure visual affordance, needs the
// browser's scroll event.

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-navy-900/95 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-navy-900/80",
        scrolled
          ? "border-navy-600 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)]"
          : "border-transparent shadow-none",
      )}
    >
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
              className="group text-small relative w-fit rounded-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute right-0 -bottom-1 left-0 h-px origin-center scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
              />
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
