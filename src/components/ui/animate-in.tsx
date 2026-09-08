"use client";
// whileInView tracks scroll position via IntersectionObserver — needs
// the browser, so this stays a small client leaf rather than pulling
// its server-rendered parents into the client bundle.

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { fadeInUp, TRANSITION } from "@/lib/animations";

interface AnimateInProps {
  children: ReactNode;
  /** One of the shared variants from src/lib/animations.ts. Defaults to fadeInUp. */
  variant?: Variants;
  /** Seconds to wait before starting — use `index * STAGGER_STEP_SECONDS` for a staggered list. */
  delay?: number;
  className?: string;
}

// Scroll-triggered reveal used everywhere the site fades/slides content
// in on scroll, so every section animates the same way instead of each
// component wiring up its own whileInView call. `once: true` means it
// never re-triggers on scroll-back; the negative viewport margin fires
// it once the element is meaningfully (not just barely) in view rather
// than waiting for it to be fully visible.
function AnimateIn({
  children,
  variant = fadeInUp,
  delay = 0,
  className,
}: AnimateInProps) {
  // <MotionConfig reducedMotion="user"> (root layout) already strips
  // transform from reduced-motion animations, but framer-motion still
  // crossfades opacity over the full duration — not good enough for
  // "disabled, not shortened". Forcing duration: 0 here removes that
  // remaining opacity fade too, without changing the DOM structure
  // between server and client render (avoids a hydration mismatch).
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion
    ? { duration: 0, delay: 0 }
    : { ...TRANSITION, delay };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variant}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { AnimateIn };
