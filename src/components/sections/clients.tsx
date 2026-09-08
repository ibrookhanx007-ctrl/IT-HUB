import Image from "next/image";

import { clientLogos } from "@/content/clients";
import { Section } from "@/components/ui/section";

// Duplicated once so the marquee can loop seamlessly at -50% translate.
const logos = [...clientLogos, ...clientLogos];

function Clients() {
  return (
    <Section className="flex flex-col gap-8">
      <h2 className="text-h4 text-center text-ink-muted">Trusted By</h2>

      <div className="group overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {logos.map((client, index) => (
            <Image
              key={`${client.name}-${index}`}
              src={client.logo}
              alt={client.name}
              width={120}
              height={40}
              className="h-10 w-auto shrink-0 grayscale transition-[filter] duration-300 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export { Clients };
