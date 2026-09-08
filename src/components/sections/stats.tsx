"use client";
// Counts up via IntersectionObserver + requestAnimationFrame, both
// client-only browser APIs.

import { useEffect, useRef, useState } from "react";

import { stats } from "@/content/stats";
import type { Stat } from "@/types";
import { Section } from "@/components/ui/section";

const COUNT_DURATION_MS = 1500;

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame: number;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / COUNT_DURATION_MS, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}

function StatItem({ value, suffix, label, start }: Stat & { start: boolean }) {
  const count = useCountUp(value, start);
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-h1 text-gold">
        {count}
        {suffix}
      </span>
      <span className="text-body text-ink-secondary">{label}</span>
    </div>
  );
}

function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="bg-navy-800">
      <Section as="div" className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} start={hasAnimated} />
        ))}
      </Section>
    </div>
  );
}

export { Stats };
