import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  as?: ElementType;
}

// Consistent max-width, horizontal padding, and vertical rhythm for
// every page section. Every marketing page section should render
// inside this instead of composing its own container/spacing.
function Section({ as: Tag = "section", className, ...props }: SectionProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 md:py-24 lg:px-12",
        className,
      )}
      {...props}
    />
  );
}

export { Section };
