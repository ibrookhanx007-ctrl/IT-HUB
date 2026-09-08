import { Section } from "@/components/ui/section";

export default function PortfolioLoading() {
  return (
    <>
      <Section className="flex flex-col gap-4 pb-0">
        <div className="h-10 w-48 animate-pulse rounded-md bg-navy-800" />
        <div className="h-5 w-full max-w-2xl animate-pulse rounded-md bg-navy-800" />
      </Section>

      <Section as="div" className="flex flex-col gap-10">
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-8 w-28 animate-pulse rounded-md bg-navy-800"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl border border-navy-600"
            >
              <div className="aspect-video w-full animate-pulse bg-navy-800" />
              <div className="flex flex-col gap-2 p-6">
                <div className="h-5 w-2/3 animate-pulse rounded-md bg-navy-700" />
                <div className="h-4 w-1/2 animate-pulse rounded-md bg-navy-700" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
