import { siteConfig } from "@/content/site";

// Query is built from city/region/country only — street-level line1 is a
// TODO placeholder today; once a real address is added, include it here
// for a precise pin instead of a city-level view.
function OfficeMap() {
  const { city, region, country } = siteConfig.contact.address;
  const query = encodeURIComponent(`${city}, ${region}, ${country}`);

  return (
    <div className="overflow-hidden rounded-xl border border-navy-600">
      <iframe
        src={`https://maps.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${city}, ${region}, ${country}`}
        className="h-96 w-full"
      />
    </div>
  );
}

export { OfficeMap };
