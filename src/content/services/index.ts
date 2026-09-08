import type { Service } from "@/types";
import { itSoftwareSolutions } from "./it-software-solutions";
import { taxAccounting } from "./tax-accounting";
import { businessRegistration } from "./business-registration";
import { digitalMarketing } from "./digital-marketing";
import { graphicDesign } from "./graphic-design";
import { ecommerceSolutions } from "./ecommerce-solutions";
import { posInvoicing } from "./pos-invoicing";
import { fbrKpraCompliance } from "./fbr-kpra-compliance";
import { accountingFinancialServices } from "./accounting-financial-services";
import { appealsLegalSupport } from "./appeals-legal-support";

// One file per service (each under 200 lines — see AGENTS.md rule 7),
// aggregated here so `import { services } from "@/content/services"`
// keeps working unchanged everywhere it's already used.
export const services: Service[] = [
  itSoftwareSolutions,
  taxAccounting,
  businessRegistration,
  digitalMarketing,
  graphicDesign,
  ecommerceSolutions,
  posInvoicing,
  fbrKpraCompliance,
  accountingFinancialServices,
  appealsLegalSupport,
];
