import type { Metadata } from "next";

// Private page: not linked from navigation, not indexed. Renders the
// full design system (colors, type scale, spacing) for visual review.
export const metadata: Metadata = {
  title: "Design System — IT HUB Corporation",
  robots: { index: false, follow: false },
};

const navyScale = [
  { token: "navy-900", swatch: "bg-navy-900", label: "Background" },
  { token: "navy-800", swatch: "bg-navy-800", label: "Surface" },
  { token: "navy-700", swatch: "bg-navy-700", label: "Elevated surface" },
  { token: "navy-600", swatch: "bg-navy-600", label: "Border" },
];

const goldScale = [
  { token: "gold", swatch: "bg-gold", label: "Base" },
  { token: "gold-hover", swatch: "bg-gold-hover", label: "Hover" },
  { token: "gold-muted", swatch: "bg-gold-muted", label: "Muted" },
];

const inkScale = [
  { token: "ink-primary", swatch: "bg-ink-primary", label: "Primary" },
  { token: "ink-secondary", swatch: "bg-ink-secondary", label: "Secondary" },
  { token: "ink-muted", swatch: "bg-ink-muted", label: "Muted" },
];

const semanticScale = [
  { token: "success", swatch: "bg-success", label: "Success" },
  { token: "error", swatch: "bg-error", label: "Error" },
  { token: "warning", swatch: "bg-warning", label: "Warning" },
];

const typeScale = [
  { className: "text-h1", label: "H1", sample: "Confident heading" },
  { className: "text-h2", label: "H2", sample: "Confident heading" },
  { className: "text-h3", label: "H3", sample: "Confident heading" },
  { className: "text-h4", label: "H4", sample: "Confident heading" },
  {
    className: "text-body",
    label: "Body",
    sample: "Highly readable body copy for paragraphs and descriptions.",
  },
  {
    className: "text-small",
    label: "Small",
    sample: "Small print, captions, and helper text.",
  },
];

const spacingScale = [
  { token: "1", className: "w-1" },
  { token: "2", className: "w-2" },
  { token: "3", className: "w-3" },
  { token: "4", className: "w-4" },
  { token: "6", className: "w-6" },
  { token: "8", className: "w-8" },
  { token: "10", className: "w-10" },
  { token: "12", className: "w-12" },
  { token: "16", className: "w-16" },
  { token: "20", className: "w-20" },
  { token: "24", className: "w-24" },
  { token: "32", className: "w-32" },
];

function ColorGroup({
  title,
  colors,
}: {
  title: string;
  colors: { token: string; swatch: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-h4 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <div key={color.token} className="w-40">
            <div
              className={`h-20 w-full rounded-md border border-navy-600 ${color.swatch}`}
            />
            <p className="text-small mt-2 text-ink-primary">{color.label}</p>
            <p className="text-small text-ink-muted">{color.token}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-16">
      <header>
        <h1 className="text-h1">Design System</h1>
        <p className="text-body mt-4">
          Brand tokens for IT HUB Corporation — dark navy, warm gold,
          reviewed for WCAG AA contrast.
        </p>
      </header>

      <section className="flex flex-col gap-10">
        <h2 className="text-h3">Color</h2>
        <ColorGroup title="Navy" colors={navyScale} />
        <ColorGroup title="Gold" colors={goldScale} />
        <ColorGroup title="Text" colors={inkScale} />
        <ColorGroup title="Semantic" colors={semanticScale} />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-h3">Type scale</h2>
        <div className="flex flex-col gap-6">
          {typeScale.map((step) => (
            <div
              key={step.className}
              className="flex flex-col gap-1 border-b border-navy-600 pb-6"
            >
              <p className="text-small text-ink-muted">
                {step.label} · .{step.className}
              </p>
              <p className={step.className}>{step.sample}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-h3">Spacing scale</h2>
        <div className="flex flex-col gap-3">
          {spacingScale.map((step) => (
            <div key={step.token} className="flex items-center gap-4">
              <span className="text-small w-8 text-ink-muted">
                {step.token}
              </span>
              <div className={`h-4 rounded-sm bg-gold ${step.className}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
