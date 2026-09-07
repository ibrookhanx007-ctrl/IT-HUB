import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { contactFormSchema } from "@/lib/validations/contact";
import { services } from "@/content/services";
import { sendContactEmail } from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

// Same generic message/status for every validation-type failure (bad
// JSON, invalid fields, honeypot hit) so a bot can't tell "wrong data"
// apart from "we caught you". Specifics are logged server-side only,
// never in the response body.
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
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

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
  const serviceTitle =
    services.find((item) => item.slug === service)?.title ?? service;

  try {
    await sendContactEmail({ name, email, phone, serviceTitle, message });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
