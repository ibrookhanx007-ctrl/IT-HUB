interface JsonLdProps {
  data: object;
}

// Renders a schema.org object (see src/lib/structured-data.ts) as a
// JSON-LD <script> tag. Search engines parse this regardless of where
// in the document it renders.
function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export { JsonLd };
