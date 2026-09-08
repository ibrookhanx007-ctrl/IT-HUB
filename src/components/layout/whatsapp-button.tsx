"use client";
// Needs scroll position (to appear after the hero) and the current
// route (to hide on /contact, which already offers direct contact
// methods) — both are client-only.

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PX = 400;

function WhatsAppButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  const message = encodeURIComponent(
    `Hi ${siteConfig.name}, I'd like to know more about your services.`,
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      className={cn(
        "fixed right-6 bottom-6 z-30 flex size-14 items-center justify-center rounded-full bg-gold text-navy-900 shadow-lg transition-all hover:bg-gold-hover focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}

export { WhatsAppButton };
