import { processSteps } from "@/content/process";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { AnimateIn } from "@/components/ui/animate-in";

function Process() {
  return (
    <Section className="flex flex-col gap-12">
      <AnimateIn>
        <h2 className="text-h2">How We Work</h2>
      </AnimateIn>

      <div className="relative flex flex-col md:flex-row">
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-5 w-0.5 bg-navy-600 md:top-5 md:right-5 md:bottom-auto md:left-5 md:h-0.5 md:w-auto"
        />

        {processSteps.map((step, index) => (
          <AnimateIn
            key={step.step}
            delay={index * STAGGER_STEP_SECONDS}
            className="relative z-10 flex gap-4 pb-10 last:pb-0 md:flex-1 md:flex-col md:items-center md:pr-6 md:pb-0 md:text-center last:md:pr-0"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy-900 font-heading font-bold text-gold">
              {step.step}
            </div>
            <div className="flex flex-col gap-2 pt-1 md:items-center md:pt-4">
              <Icon
                name={step.icon}
                className="size-6 text-gold"
                aria-hidden="true"
              />
              <h3 className="text-h4">{step.title}</h3>
              <p className="text-body">{step.description}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}

export { Process };
