interface ColorGroupProps {
  title: string;
  colors: { token: string; swatch: string; label: string }[];
}

function ColorGroup({ title, colors }: ColorGroupProps) {
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

export { ColorGroup };
