import type { LegalPageContent } from "@/types";
import { siteConfig } from "./site";

// ⚠️ TEMPLATE — drafted to accurately describe what this site actually
// does (the contact form, its Resend-based email delivery, IP-based
// rate limiting, and the Contact page's Google Maps embed), but it has
// not been reviewed by a lawyer. Have counsel review both pages before
// launch, and fill in the "TODO" contact details in src/content/site.ts
// first — this content links to them.
export const privacyPolicy: LegalPageContent = {
  seo: {
    title: "Privacy Policy",
    description: `How ${siteConfig.name} collects, uses, and protects information submitted through this website.`,
  },
  heading: "Privacy Policy",
  lastUpdated: "This policy was last updated on September 8, 2026.",
  intro: `This policy explains what information ${siteConfig.name} collects through this website, why, and what we do with it. This site has no user accounts and no database — the only personal information we collect is what you choose to submit through the contact form.`,
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "When you submit the contact form, we collect your name, email address, phone number (if provided), the service you're interested in, and the message you write.",
        "For spam prevention, our server temporarily notes the IP address of form submissions to limit how many times the form can be submitted from the same address in a short window. This record resets automatically and is never linked to your name or message content.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "Contact form submissions are sent directly to our team by email so we can respond to your enquiry. We do not store submissions in a database — they exist only as the email they generate and whatever copy you or we keep in our own inboxes.",
        "We use your information solely to respond to your enquiry and, if you go on to become a client, to deliver the service you've agreed to. We do not sell, rent, or trade your information to third parties.",
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "We use Resend, an email delivery service, to send contact form notifications. Your submission passes through their systems as part of sending that email; see Resend's own privacy policy for how they handle data in transit.",
        "The Contact page embeds a Google Maps view of our office location. Loading that embed may allow Google to set its own cookies or collect data under Google's privacy policy, independent of this site.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "This site does not use tracking or analytics cookies. The Google Maps embed on the Contact page is the only third-party content on the site that may set its own cookies, as noted above.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "Since contact form submissions are not stored in a database, retention is governed by normal email retention — we keep enquiries as long as reasonably needed for business records, then delete them. You can ask us to delete a specific submission at any time using the contact details below.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it, by emailing us using the address on our Contact page. We'll respond within a reasonable time.",
      ],
    },
    {
      heading: "Children's Privacy",
      body: [
        "This site is intended for businesses and business owners. It is not directed at children, and we do not knowingly collect information from anyone under 18.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "If we change how we handle information, we'll update this page and change the date above. Continued use of the site after a change means you accept the updated policy.",
      ],
    },
    {
      heading: "Contact Us",
      body: [
        `Questions about this policy? Reach us using the phone number or email address on our Contact page, or write to us at our office in ${siteConfig.contact.address.city}, ${siteConfig.contact.address.region}, ${siteConfig.contact.address.country}.`,
      ],
    },
  ],
};

export const termsOfService: LegalPageContent = {
  seo: {
    title: "Terms of Service",
    description: `The terms that govern your use of ${siteConfig.name}'s website.`,
  },
  heading: "Terms of Service",
  lastUpdated: "These terms were last updated on September 8, 2026.",
  intro: `These terms govern your use of the ${siteConfig.name} website. They cover the website itself, not the services we deliver to clients — those are governed by the separate written proposal each client agrees to before work begins.`,
  sections: [
    {
      heading: "About This Website",
      body: [
        `This website is a marketing and informational resource for ${siteConfig.name}, describing our IT, tax, accounting, and business services and letting visitors get in touch. It does not process payments, host user accounts, or execute contracts on its own — every engagement starts with a conversation and a written proposal.`,
      ],
    },
    {
      heading: "Acceptable Use",
      body: [
        "You agree not to misuse this website — including attempting to gain unauthorized access to it, submitting the contact form with false or malicious content, or using automated tools to scrape or overload the site.",
      ],
    },
    {
      heading: "No Guarantee From Website Content",
      body: [
        "Service descriptions, case studies, and other content on this site are informational and illustrative. They describe the kind of work we do, not a guarantee of results for any specific engagement. Actual scope, timelines, deliverables, and pricing for a project are set out in the written proposal for that project, which governs over anything on this website.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        `The text, design, and graphics on this site belong to ${siteConfig.name} unless otherwise noted, and may not be copied or reused without our permission.`,
      ],
    },
    {
      heading: "Third-Party Links and Embeds",
      body: [
        "This site links to or embeds third-party services, including a Google Maps location embed. We aren't responsible for the content, availability, or privacy practices of those third-party services.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        `To the extent permitted by law, ${siteConfig.name} is not liable for any loss or damage arising from your use of this website, including reliance on informational content that hasn't been confirmed in a signed proposal.`,
      ],
    },
    {
      heading: "Governing Law",
      body: [
        `These terms are governed by the laws of Pakistan. Any dispute relating to this website is subject to the jurisdiction of the courts of ${siteConfig.contact.address.region}.`,
      ],
    },
    {
      heading: "Changes to These Terms",
      body: [
        "We may update these terms from time to time. Changes take effect once posted on this page, and the date above will reflect the latest revision.",
      ],
    },
    {
      heading: "Contact Us",
      body: [
        "Questions about these terms? Reach us using the phone number or email address on our Contact page.",
      ],
    },
  ],
};
