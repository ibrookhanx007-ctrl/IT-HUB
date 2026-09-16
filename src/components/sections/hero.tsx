"use client";
// Orchestrates a staggered fade-up of the badge, headline, and CTAs
// on page load — framer-motion's animation engine is client-only.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { siteConfig } from "@/content/site";
import { homeContent } from "@/content/home";
import {
  staggerContainer,
  STAGGER_STEP_SECONDS,
  TRANSITION,
} from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

// Position-only — no opacity — unlike the shared fadeInUp/staggerItem.
// This is the LCP element: the SSR'd HTML already renders it at full
// opacity (just offset by `y`), so it paints immediately instead of
// waiting on hydration + framer-motion to lift it out of opacity: 0.
const heroItem: Variants = {
  hidden: { y: 36 },
  visible: { y: 0 },
};

function Hero() {
  // <MotionConfig reducedMotion="user"> strips transform but still
  // crossfades opacity — force duration 0 so reduced motion truly
  // disables the entrance sequence instead of shortening it.
  const prefersReducedMotion = useReducedMotion();
  const itemTransition = prefersReducedMotion ? { duration: 0 } : TRANSITION;

  // Splits the slogan so its last word can carry the gold accent —
  // styling only, the copy itself still comes from siteConfig.
  const sloganWords = siteConfig.slogan.split(" ");
  const sloganLead = sloganWords.slice(0, -1).join(" ");
  const sloganAccent = sloganWords.at(-1);

  return (
    <Section className="relative overflow-hidden py-14 md:py-20">
      {/* Decorative only — a starfield-style dot grid plus a large
          softly-lit sphere standing in for a literal photo. Both are
          empty layers (no text/image), so animating/painting them
          never delays Largest Contentful Paint. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(201,169,97,0.35)_1px,transparent_1px)] bg-[length:28px_28px] opacity-20" />
        <div className="absolute top-1/2 left-1/4 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-gold blur-[120px]" />
        <div className="absolute top-1/2 -right-24 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,var(--color-gold)_0%,var(--color-navy-700)_45%,var(--color-navy-900)_75%)] opacity-70 blur-[2px] md:h-[38rem] md:w-[38rem]" />
      </div>

      {/* Sits above the decorative absolute layer via normal DOM order
          (no z-index juggling needed) and carries the real layout —
          this element also propagates the stagger timing to its
          three children. */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{
          staggerChildren: prefersReducedMotion ? 0 : STAGGER_STEP_SECONDS,
        }}
        className="relative flex flex-col items-start gap-5"
      >
        <motion.div
          variants={heroItem}
          transition={itemTransition}
          className="w-fit"
        >
          <span className="text-small inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-semibold tracking-wide text-gold-ink uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-gold"
            />
            {siteConfig.tagline}
          </span>
        </motion.div>

        <motion.div
          variants={heroItem}
          transition={itemTransition}
          className="flex flex-col gap-2"
        >
          <h1 className="text-h1 max-w-2xl">{siteConfig.name}</h1>
          <p className="text-h1 max-w-2xl text-ink-secondary">
            {sloganLead} <span className="text-gold-ink">{sloganAccent}</span>
          </p>
        </motion.div>

        <motion.div
          variants={heroItem}
          transition={itemTransition}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href={homeContent.hero.primaryCta.href}>
              {homeContent.hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={homeContent.hero.secondaryCta.href}>
              {homeContent.hero.secondaryCta.label}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}

export { Hero };
