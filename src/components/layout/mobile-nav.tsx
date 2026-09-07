"use client";
// Sheet open/close state and link-click handling are interactive.

import Link from "next/link";
import { Menu } from "lucide-react";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col bg-navy-800">
        <SheetHeader>
          <SheetTitle className="text-h4">{siteConfig.name}</SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {siteConfig.nav.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="text-body rounded-md px-3 py-3 font-medium text-ink-primary hover:bg-navy-700 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto px-4 pb-4">
          <SheetClose asChild>
            <Link
              href={siteConfig.primaryCta.href}
              className={cn(buttonVariants(), "w-full")}
            >
              {siteConfig.primaryCta.label}
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
