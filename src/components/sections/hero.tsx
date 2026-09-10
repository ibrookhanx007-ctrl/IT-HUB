"use client";
// Orchestrates a staggered fade-up of the tagline, headline, and CTAs
// on page load — framer-motion's animation engine is client-only.

import Link from "next/link";
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
  hidden: { y: 24 },
  visible: { y: 0 },
};

function Hero() {
  // <MotionConfig reducedMotion="user"> strips transform but still
  // crossfades opacity — force duration 0 so reduced motion truly
  // disables the entrance sequence instead of shortening it.
  const prefersReducedMotion = useReducedMotion();
  const itemTransition = prefersReducedMotion ? { duration: 0 } : TRANSITION;

  return (
    <Section className="relative flex flex-col items-start gap-5 overflow-hidden py-10 md:py-14">
      {/* Decorative only (empty, no text/image) — animating it is safe
          for LCP; see the --animate-glow comment in globals.css. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-gold blur-[120px]" />
      </div>

      {/* display:contents keeps this out of the flex box model — Section's
          flex/gap layout still applies directly to the three real blocks
          below, this element exists only to propagate stagger timing. */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{
          staggerChildren: prefersReducedMotion ? 0 : STAGGER_STEP_SECONDS,
        }}
        className="contents"
      >
        <motion.p
          variants={heroItem}
          transition={itemTransition}
          className="text-small font-semibold tracking-wide text-gold-ink uppercase"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          variants={heroItem}
          transition={itemTransition}
          className="flex flex-col gap-4"
        >
          <h1 className="text-h1 max-w-3xl">{siteConfig.name}</h1>
          <p className="text-h3 max-w-2xl text-ink-secondary">
            {siteConfig.slogan}
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
