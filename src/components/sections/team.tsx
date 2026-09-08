import Image from "next/image";

import { teamMembers } from "@/content/team";
import { aboutContent } from "@/content/about";
import { STAGGER_STEP_SECONDS } from "@/lib/animations";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

function Team() {
  const { heading, emptyState } = aboutContent.team;

  return (
    <Section className="flex flex-col gap-10">
      <AnimateIn>
        <h2 className="text-h2">{heading}</h2>
      </AnimateIn>

      {teamMembers.length === 0 ? (
        <p className="text-body max-w-2xl text-ink-secondary">{emptyState}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <AnimateIn
              key={member.name}
              delay={index * STAGGER_STEP_SECONDS}
              className="flex flex-col gap-3"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={200}
                height={200}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-h4">{member.name}</h3>
                <p className="text-small font-medium text-gold">
                  {member.role}
                </p>
                <p className="text-body">{member.bio}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      )}
    </Section>
  );
}

export { Team };
