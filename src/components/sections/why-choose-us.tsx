import { whyUsPoints } from "@/content/why-us";
import { homeContent } from "@/content/home";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { AnimateIn } from "@/components/ui/animate-in";
import { Card, CardContent } from "@/components/ui/card";

function WhyChooseUs() {
  return (
    <Section className="flex flex-col gap-12">
      <AnimateIn>
        <h2 className="text-h2">{homeContent.whyUsSection.heading}</h2>
      </AnimateIn>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUsPoints.map((point, index) => (
          <AnimateIn key={point.title} delay={index * STAGGER_STEP_SECONDS}>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-3">
                <Icon
                  name={point.icon}
                  className="size-8 text-gold-ink"
                  aria-hidden="true"
                />
                <h3 className="text-h4">{point.title}</h3>
                <p className="text-body">{point.description}</p>
              </CardContent>
            </Card>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}

export { WhyChooseUs };
