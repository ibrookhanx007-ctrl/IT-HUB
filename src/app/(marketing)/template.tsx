"use client";
// Next.js remounts template.tsx on every navigation (layout.tsx does
// not) — that remount is what drives this per-page-view transition.

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { TRANSITION } from "@/lib/animations";

interface MarketingTemplateProps {
  children: ReactNode;
}

// Position-only, no opacity — same reasoning as the hero's heroItem
// variant (see hero.tsx): this wraps every page's content, so
// animating opacity here would delay LCP on every navigation, not
// just the homepage.
export default function MarketingTemplate({
  children,
}: MarketingTemplateProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { ...TRANSITION, duration: 0.35 }
      }
    >
      {children}
    </motion.div>
  );
}
