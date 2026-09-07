import { createElement, type ComponentProps } from "react";

import { getIcon } from "@/lib/icon";

interface IconProps extends Omit<ComponentProps<"svg">, "name"> {
  /** lucide-react icon name, as stored in content data. */
  name: string;
}

// Resolves a content-driven icon name to its component here, so callers
// never assign a dynamic component reference inline during their own render.
// Uses createElement (not a JSX tag) since the component type isn't known
// statically — see react-hooks/static-components.
function Icon({ name, ...props }: IconProps) {
  return createElement(getIcon(name), props);
}

export { Icon };
