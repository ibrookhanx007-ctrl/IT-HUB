import { createElement } from "react";
import { Resend } from "resend";

import { ContactNotificationEmail } from "@/emails/contact-notification";

// Server-only: reads RESEND_API_KEY, never imported from a client
// component (see AGENTS.md rule 6).

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  serviceTitle: string;
  message: string;
}

function buildPlainText({
  name,
  email,
  phone,
  serviceTitle,
  message,
}: ContactSubmission) {
  return [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Service: ${serviceTitle}`,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export async function sendContactEmail(submission: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Email is not configured: missing RESEND_API_KEY, CONTACT_EMAIL_TO, or CONTACT_EMAIL_FROM.",
    );
  }

  // Constructed lazily (not at module scope) so builds/route analysis
  // don't fail before real env vars are configured — Resend's
  // constructor throws immediately if the key is missing.
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: submission.email,
    subject: `New inquiry: ${submission.serviceTitle}`,
    react: createElement(ContactNotificationEmail, submission),
    text: buildPlainText(submission),
  });

  if (error) {
    throw new Error(`Resend failed to send email: ${error.message}`);
  }
}
