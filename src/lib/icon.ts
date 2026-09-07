import { icons, type LucideIcon } from "lucide-react";

/** Resolves a lucide-react icon name (as stored in content data) to its component. */
export function getIcon(name: string): LucideIcon {
  return icons[name as keyof typeof icons] ?? icons.Circle;
}
