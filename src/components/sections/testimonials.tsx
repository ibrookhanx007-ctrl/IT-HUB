"use client";
// Embla Carousel (autoplay, scroll-snap state for the dot indicators)
// needs client-side state and effects.

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

import { testimonials } from "@/content/testimonials";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/animate-in";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <Section className="flex flex-col gap-10">
      <AnimateIn>
        <h2 className="text-h2">What Clients Say</h2>
      </AnimateIn>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        plugins={
          prefersReducedMotion
            ? []
            : [Autoplay({ delay: 5000, stopOnMouseEnter: true })]
        }
      >
        <CarouselContent>
          {testimonials.map((testimonial) => {
            const service = services.find(
              (item) => item.slug === testimonial.service,
            );
            return (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-4">
                    <div className="flex gap-1" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={cn(
                            "size-4",
                            index < testimonial.rating
                              ? "fill-gold text-gold-ink"
                              : "text-navy-600",
                          )}
                        />
                      ))}
                    </div>
                    <span className="sr-only">
                      {testimonial.rating} out of 5 stars
                    </span>
                    <p className="text-body flex-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex flex-col">
                      <span className="text-body font-semibold text-ink-primary">
                        {testimonial.clientName}
                      </span>
                      <span className="text-small">
                        {testimonial.role}, {testimonial.company} —{" "}
                        {testimonial.city}
                      </span>
                      {service && (
                        <span className="text-small text-gold-ink">
                          {service.title}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="mt-8 flex items-center justify-center gap-4">
          <CarouselPrevious className="static translate-y-0" />
          <div
            role="tablist"
            aria-label="Testimonial slides"
            className="flex gap-2"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "size-2 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none",
                  index === selectedIndex ? "bg-gold" : "bg-navy-600",
                )}
              />
            ))}
          </div>
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </Section>
  );
}

export { Testimonials };
