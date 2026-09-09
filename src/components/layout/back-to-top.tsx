"use client";
// Needs scroll position and a click handler that triggers a browser
// scroll animation — both client-only.

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PX = 600;

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "fixed right-6 bottom-24 z-30 flex size-11 items-center justify-center rounded-full border border-navy-600 bg-navy-800 text-ink-primary shadow-lg transition-all hover:border-gold hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}

export { BackToTop };
