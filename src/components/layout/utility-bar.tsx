import { siteConfig } from "@/content/site";

function UtilityBar() {
  const { phone, email, hours } = siteConfig.contact;

  return (
    <div className="hidden border-b border-navy-600 bg-navy-800 md:block">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end gap-6 px-6 py-2 sm:px-8 lg:px-12">
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-small rounded-sm text-ink-muted hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          {phone}
        </a>
        <a
          href={`mailto:${email}`}
          className="text-small rounded-sm text-ink-muted hover:text-ink-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          {email}
        </a>
        <span className="text-small text-ink-muted">{hours[0]}</span>
      </div>
    </div>
  );
}

export { UtilityBar };
