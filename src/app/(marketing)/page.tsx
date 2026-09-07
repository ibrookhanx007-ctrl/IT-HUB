import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AboutPreview } from "@/components/sections/about-preview";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <AboutPreview />
      <CtaBand />
    </>
  );
}
