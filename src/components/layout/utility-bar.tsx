import { Clock, Mail, Phone } from "lucide-react";

import { siteConfig } from "@/content/site";
import { isPlaceholder } from "@/lib/utils";

function UtilityBar() {
  const { phone, email, hours } = siteConfig.contact;
  const hasPhone = !isPlaceholder(phone);
  const hasEmail = !isPlaceholder(email);

  return (
    <div className="hidden border-b border-navy-600 bg-navy-800 md:block">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end gap-6 px-6 py-2 sm:px-8 lg:px-12">
        {hasPhone && (
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-small inline-flex items-center gap-1.5 rounded-sm text-ink-muted hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {phone}
          </a>
        )}
        {hasEmail && (
          <a
            href={`mailto:${email}`}
            className="text-small inline-flex items-center gap-1.5 rounded-sm text-ink-muted hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {email}
          </a>
        )}
        <span className="text-small inline-flex items-center gap-1.5 text-ink-muted">
          <Clock className="size-3.5" aria-hidden="true" />
          {hours[0]}
        </span>
      </div>
    </div>
  );
}

export { UtilityBar };
