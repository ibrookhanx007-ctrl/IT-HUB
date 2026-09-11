import {
  BadgeCheck,
  Bot,
  Building2,
  Calculator,
  ChartLine,
  Circle,
  Clapperboard,
  Clock,
  Code,
  FileSignature,
  Globe,
  GraduationCap,
  Handshake,
  LifeBuoy,
  Lightbulb,
  Lock,
  MapPin,
  Megaphone,
  MessageCircle,
  PenTool,
  Receipt,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Target,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// Named imports (not lucide-react's `icons` lookup object) so unused
// icons are tree-shaken out of the client bundle — importing `icons`
// pulls in the entire ~1800-icon library regardless of how many are
// actually referenced by name at runtime.
const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Bot,
  Building2,
  Calculator,
  ChartLine,
  Clapperboard,
  Clock,
  Code,
  FileSignature,
  Globe,
  GraduationCap,
  Handshake,
  LifeBuoy,
  Lightbulb,
  Lock,
  MapPin,
  Megaphone,
  MessageCircle,
  PenTool,
  Receipt,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Target,
  Users,
  Wrench,
};

/** Resolves a lucide-react icon name (as stored in content data) to its component. */
export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Circle;
}
