import type { Transition, Variants } from "framer-motion";

// Single duration/easing pair for every animation on the site — import
// this alongside a variant instead of writing timing ad hoc. Kept
// separate from the variants themselves (not baked into their
// `visible` transition) so a per-instance `delay` can be layered on
// via the `transition` prop without fighting variant/prop precedence.
export const TRANSITION: Transition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],
};

// Milliseconds between items in a staggered reveal (service cards,
// value cards, process steps, portfolio cards) — expressed in seconds
// for framer-motion's `delay`/`staggerChildren`.
export const STAGGER_STEP_SECONDS = 0.08;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

// For a parent orchestrating several direct motion children at once
// (the hero's headline/subtext/buttons on page load) rather than each
// child tracking its own scroll trigger. Carries no transition of its
// own — pass `transition={{ staggerChildren: ... }}` as a prop on the
// parent instead, so it can be zeroed out under reduced motion.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {},
};

export const staggerItem: Variants = fadeInUp;

// Shared hover recipe for interactive cards: a transform-only lift
// plus an opacity-toggled glow ring, never a direct box-shadow or
// border-color transition — keeps hover state compositor-only, same
// as every scroll/load animation in this file. Apply to the Card
// itself; put `group` on the wrapping <Link>.
export const cardHoverClassName =
  "relative transition-transform duration-300 group-hover:-translate-y-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:shadow-[0_0_0_1px_var(--color-gold),0_12px_32px_-8px_rgba(201,169,97,0.45)] before:transition-opacity before:duration-300 group-hover:before:opacity-100";
