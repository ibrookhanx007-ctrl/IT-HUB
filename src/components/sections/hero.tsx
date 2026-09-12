"use client";
// Orchestrates a staggered fade-up of the badge, headline, and CTAs
// on page load — framer-motion's animation engine is client-only.

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { siteConfig } from "@/content/site";
import { homeContent } from "@/content/home";
import { teamMembers } from "@/content/team";
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
// The photo collage reuses the same variant so neither side risks
// becoming an opacity-delayed LCP candidate.
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
  const [ceo, founder] = teamMembers;

  return (
    <Section className="relative overflow-hidden py-10 md:py-14">
      {/* Decorative only (empty, no text/image) — animating it is safe
          for LCP; see the --animate-glow comment in globals.css. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-gold blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          transition={{
            staggerChildren: prefersReducedMotion ? 0 : STAGGER_STEP_SECONDS,
          }}
          className="flex flex-col items-start gap-5"
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

        {ceo && founder && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroItem}
            transition={itemTransition}
            className="relative mx-auto h-[320px] w-full max-w-md sm:h-[400px] lg:h-[440px]"
          >
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 size-24 rounded-full bg-gold/25 blur-2xl"
            />
            <div className="absolute top-0 left-0 h-[72%] w-[64%] overflow-hidden rounded-2xl border-4 border-navy-900 shadow-2xl">
              <Image
                src={ceo.photo}
                alt={`${ceo.name}, ${ceo.role} of ${siteConfig.name}`}
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[56%] w-[54%] overflow-hidden rounded-2xl border-4 border-navy-900 shadow-2xl">
              <Image
                src={founder.photo}
                alt={`${founder.name}, ${founder.role} of ${siteConfig.name}`}
                fill
                sizes="(min-width: 1024px) 18vw, 36vw"
                className="object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}

export { Hero };
