"use client";
// react-hook-form manages form state/validation and needs a client-side
// submit handler that calls the API route.

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { services } from "@/content/services";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ContactForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }

      toast.success("Message sent", {
        description: "We'll get back to you within one business day.",
      });
      reset();
    } catch (error) {
      toast.error("Couldn't send your message", {
        description:
          error instanceof Error ? error.message : "Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-xl border border-navy-600 bg-navy-800 p-8"
    >
      {/* Honeypot — hidden from real users and assistive tech, catches
          bots that fill every field. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" aria-invalid={!!errors.name} {...register("name")} />
        {errors.name && (
          <p className="text-small text-error">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-small text-error">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          type="tel"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-small text-error">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service</Label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="service"
                aria-invalid={!!errors.service}
                onBlur={field.onBlur}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && (
          <p className="text-small text-error">{errors.service.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-small text-error">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export { ContactForm };
