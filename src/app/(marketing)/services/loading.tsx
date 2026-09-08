import { Section } from "@/components/ui/section";

export default function ServicesLoading() {
  return (
    <>
      <Section className="flex flex-col gap-4 pb-0">
        <div className="h-10 w-64 animate-pulse rounded-md bg-navy-800" />
        <div className="h-5 w-full max-w-2xl animate-pulse rounded-md bg-navy-800" />
      </Section>

      <Section as="div" className="flex flex-col">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border-b border-navy-600 py-10 first:pt-0 last:border-b-0 md:flex-row md:gap-8"
          >
            <div className="size-10 shrink-0 animate-pulse rounded-md bg-navy-800" />
            <div className="flex flex-1 flex-col gap-3">
              <div className="h-6 w-48 animate-pulse rounded-md bg-navy-800" />
              <div className="h-4 w-full max-w-md animate-pulse rounded-md bg-navy-800" />
              <div className="h-4 w-full max-w-lg animate-pulse rounded-md bg-navy-800" />
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}
