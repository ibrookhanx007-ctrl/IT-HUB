import { cn } from "@/lib/utils";

interface UsMotifProps {
  className?: string;
}

// Decorative, theme-aware nod to the US: a faint field of stars over
// thin horizontal stripes, drawn in the gold accent at very low opacity
// so it reads as texture, not a flag. Pure CSS/SVG — no image request.
function UsMotif({ className }: UsMotifProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden text-gold",
        className,
      )}
    >
      <div className="absolute inset-x-0 bottom-0 flex h-24 flex-col justify-between opacity-[0.07]">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="block h-px bg-current" />
        ))}
      </div>
      <svg
        className="absolute top-8 right-8 hidden h-28 w-44 opacity-[0.14] md:block"
        viewBox="0 0 176 112"
        fill="currentColor"
      >
        {Array.from({ length: 15 }, (_, index) => {
          const col = index % 5;
          const row = Math.floor(index / 5);
          return (
            <path
              key={index}
              transform={`translate(${12 + col * 36} ${14 + row * 40})`}
              d="M0 -7 L2 -2.2 L7 -2.2 L3 1 L4.5 6 L0 3 L-4.5 6 L-3 1 L-7 -2.2 L-2 -2.2 Z"
            />
          );
        })}
      </svg>
    </div>
  );
}

export { UsMotif };
