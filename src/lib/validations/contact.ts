import { z } from "zod";

import { services } from "@/content/services";

const serviceSlugs = services.map((service) => service.slug);

// Loosely validates Pakistani phone numbers (mobile or landline): an
// optional +92/0 prefix, then 9-11 digits, tolerant of spaces and dashes.
const pakistaniPhoneRegex = /^(\+92|0)[\s-]?\d{2,4}[\s-]?\d{6,8}$/;

// Shared by the client form (UX only) and the API route (source of
// truth) — the server re-validates every submission against this same
// schema and never trusts client-side validation alone.
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be at most 100 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || pakistaniPhoneRegex.test(value),
      "Enter a valid Pakistani phone number.",
    ),
  service: z
    .string()
    .refine(
      (value) => serviceSlugs.includes(value),
      "Please select a service.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be at most 2000 characters."),
  // Hidden from real users via CSS — bots that fill every field trip this.
  honeypot: z.string().max(0, "Spam detected.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
