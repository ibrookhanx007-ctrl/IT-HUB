"use client";
// Next.js remounts template.tsx on every navigation (layout.tsx does
// not) — that remount is what drives this transition, and usePathname
// is what lets it apply only on the homepage.

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import { TRANSITION } from "@/lib/animations";

interface MarketingTemplateProps {
  children: ReactNode;
}

// Position-only, no opacity — same reasoning as the hero's heroItem
// variant (see hero.tsx): animating opacity here would delay LCP.
// Scoped to "/" only — every other page renders children directly,
// with no transition wrapper at all.
export default function MarketingTemplate({
  children,
}: MarketingTemplateProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (pathname !== "/") {
    return children;
  }

  return (
    <motion.div
      initial={{ y: 18 }}
      animate={{ y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { ...TRANSITION, duration: 0.5 }
      }
    >
      {children}
    </motion.div>
  );
}
