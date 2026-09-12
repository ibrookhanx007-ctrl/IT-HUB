import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import { teamMembers } from "@/content/team";
import { aboutContent } from "@/content/about";
import { STAGGER_STEP_SECONDS, cardHoverClassName } from "@/lib/animations";
import { cn } from "@/lib/utils";
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
        <div className="grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <AnimateIn
              key={member.name}
              delay={index * STAGGER_STEP_SECONDS}
              className="flex flex-col gap-3"
            >
              <Link
                href={`/about/team/${member.slug}`}
                className={cn(
                  "group flex flex-col gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 focus-visible:outline-none",
                  cardHoverClassName,
                )}
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {member.department && (
                    <span className="text-small mb-1 w-fit rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-semibold tracking-wide text-gold-ink uppercase">
                      {member.department}
                    </span>
                  )}
                  <h3 className="text-h4">{member.name}</h3>
                  <p className="text-small font-medium text-gold-ink">
                    {member.role}
                  </p>
                  {member.bio && <p className="text-body">{member.bio}</p>}
                </div>
                <div className="mt-1 flex items-center gap-1.5 border-t border-navy-600 pt-3 text-small font-medium text-gold-ink group-hover:text-gold-ink-hover">
                  View Profile
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </div>
              </Link>
              {member.phone && (
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="text-small -mt-1 inline-flex w-fit items-center gap-1.5 rounded-sm text-ink-secondary hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {member.phone}
                </a>
              )}
            </AnimateIn>
          ))}
        </div>
      )}
    </Section>
  );
}

export { Team };
