import { whyUsPoints } from "@/content/why-us";
import { homeContent } from "@/content/home";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";

function WhyChooseUs() {
  return (
    <Section className="flex flex-col gap-12">
      <h2 className="text-h2">{homeContent.whyUsSection.heading}</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyUsPoints.map((point) => (
          <div key={point.title} className="flex flex-col gap-3">
            <Icon
              name={point.icon}
              className="size-8 text-gold"
              aria-hidden="true"
            />
            <h3 className="text-h4">{point.title}</h3>
            <p className="text-body">{point.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export { WhyChooseUs };
