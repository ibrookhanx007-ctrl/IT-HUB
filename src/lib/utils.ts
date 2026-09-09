export { cn } from "cn";

// Contact fields not yet filled in are stored as "TODO: ..." (see
// src/content/site.ts) — never render that placeholder text to a real
// visitor; check this before displaying a contact-info value.
export const isPlaceholder = (value: string) => value.startsWith("TODO");
