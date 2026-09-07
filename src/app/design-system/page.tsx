import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { ColorGroup } from "./color-group";
import { ToastDemoButton } from "./toast-demo-button";
import {
  navyScale,
  goldScale,
  inkScale,
  semanticScale,
  typeScale,
  spacingScale,
} from "./tokens-data";

// Private page: not linked from navigation, not indexed. Renders the
// full design system (colors, type scale, spacing, UI primitives) for
// visual review.
export const metadata: Metadata = {
  title: "Design System — IT HUB Corporation",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <main>
      <Section className="pb-0">
        <h1 className="text-h1">Design System</h1>
        <p className="text-body mt-4">
          Brand tokens and UI primitives for IT HUB Corporation — dark navy,
          warm gold, reviewed for WCAG AA contrast.
        </p>
      </Section>

      <Section className="flex flex-col gap-10">
        <h2 className="text-h3">Color</h2>
        <ColorGroup title="Navy" colors={navyScale} />
        <ColorGroup title="Gold" colors={goldScale} />
        <ColorGroup title="Text" colors={inkScale} />
        <ColorGroup title="Semantic" colors={semanticScale} />
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="text-h3">Type scale</h2>
        <div className="flex flex-col gap-6">
          {typeScale.map((step) => (
            <div
              key={step.className}
              className="flex flex-col gap-1 border-b border-navy-600 pb-6"
            >
              <p className="text-small text-ink-muted">
                {step.label} · .{step.className}
              </p>
              <p className={step.className}>{step.sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="text-h3">Spacing scale</h2>
        <div className="flex flex-col gap-3">
          {spacingScale.map((step) => (
            <div key={step.token} className="flex items-center gap-4">
              <span className="text-small w-8 text-ink-muted">
                {step.token}
              </span>
              <div className={`h-4 rounded-sm bg-gold ${step.className}`} />
            </div>
          ))}
        </div>
      </Section>

      <Section className="flex flex-col gap-16">
        <h2 className="text-h3">UI primitives</h2>

        <div className="flex flex-col items-start gap-4">
          <h3 className="text-h4">Button</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="text-h4">Card</h3>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>FBR & KPRA Compliance</CardTitle>
              <CardDescription>
                Stay compliant with Pakistani tax authorities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-small text-ink-secondary">
                Registration, filing, and audit support handled end to end.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Learn more
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-h4">Input, Textarea & Label</h3>
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-name">Name</Label>
              <Input id="ds-name" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-message">Message</Label>
              <Textarea id="ds-message" placeholder="How can we help?" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-h4">Accordion</h3>
          <Accordion type="single" collapsible className="max-w-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                IT & software, tax and accounting, business registration,
                digital marketing, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Where are you based?</AccordionTrigger>
              <AccordionContent>
                Mardan, Khyber Pakhtunkhwa, Pakistan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="text-h4">Sheet</h3>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Used for the mobile navigation drawer.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="text-h4">Toast (Sonner)</h3>
          <ToastDemoButton />
        </div>
      </Section>
    </main>
  );
}
