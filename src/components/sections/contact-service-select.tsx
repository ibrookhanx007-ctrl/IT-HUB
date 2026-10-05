"use client";
// Radix Select is controlled by react-hook-form's Controller, so its
// value/onChange wiring has to run on the client.

import { services } from "@/content/services";
import { usServices } from "@/content/us-services";
import { usCorporateContent } from "@/content/us-corporate";
import { contactFormLabels } from "@/content/pages";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactServiceSelectProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  invalid: boolean;
}

function ContactServiceSelect({
  value,
  onChange,
  onBlur,
  invalid,
}: ContactServiceSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        id="service"
        aria-invalid={invalid}
        aria-describedby={invalid ? "service-error" : undefined}
        onBlur={onBlur}
      >
        <SelectValue placeholder={contactFormLabels.servicePlaceholder} />
      </SelectTrigger>
      <SelectContent>
        {services.map((service) => (
          <SelectItem key={service.slug} value={service.slug}>
            {service.title}
          </SelectItem>
        ))}
        <SelectGroup>
          <SelectLabel>{usCorporateContent.contactGroupLabel}</SelectLabel>
          {usServices.map((service) => (
            <SelectItem key={service.slug} value={service.slug}>
              {service.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { ContactServiceSelect };
