import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { contactFormSchema } from "@/lib/validations/contact";

// Same generic message/status for every failure (bad JSON, invalid
// fields, honeypot hit) so a bot can't tell "wrong data" apart from
// "we caught you". Specifics are logged server-side only, never in the
// response body.
function genericError(status: number) {
  return NextResponse.json(
    {
      error:
        "We couldn't process your submission. Please check your details and try again.",
    },
    { status },
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return genericError(400);
  }

  // The client already validated this with the same schema for UX —
  // that result is never trusted. This is the source of truth.
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    const honeypotTriggered = result.error.issues.some(
      (issue) => issue.path[0] === "honeypot",
    );
    if (honeypotTriggered) {
      console.warn("Contact form honeypot triggered — likely spam.");
    } else {
      console.error("Contact form validation failed:", result.error.issues);
    }
    return genericError(400);
  }

  const { name, email, phone, service, message } = result.data;

  try {
    // TODO: send the submission via email (src/lib/email.ts) and apply
    // IP-based rate limiting before this point — added in the next phase.
    console.log("Contact form submission received:", {
      name,
      email,
      phone,
      service,
      message,
    });
  } catch (error) {
    console.error("Failed to process contact form submission:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
