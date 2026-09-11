export interface ServiceSeo {
  title: string;
  description: string;
  keywords: string[];
}

export type ServiceCategory = "IT & Digital Services" | "Tax Services";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** One line, for service cards. */
  shortDescription: string;
  /** 2-3 paragraphs, one string per paragraph. */
  longDescription: string[];
  /** 4-6 concrete deliverables. */
  deliverables: string[];
  /** lucide-react icon name, e.g. "Calculator". */
  icon: string;
  seo: ServiceSeo;
}
