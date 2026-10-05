import type { UsService } from "@/types";
import { llcCorporationFormation } from "./llc-corporation-formation";
import { einItinServices } from "./ein-itin-services";
import { registeredAgentServices } from "./registered-agent-services";
import { businessTaxFiling } from "./business-tax-filing";
import { bookkeepingAccounting } from "./bookkeeping-accounting";
import { salesTaxServices } from "./sales-tax-services";
import { annualCompliance } from "./annual-compliance";
import { businessBankAccountAssistance } from "./business-bank-account-assistance";
import { businessAddressMailServices } from "./business-address-mail-services";
import { businessConsulting } from "./business-consulting";

// One file per service (each under 200 lines — see AGENTS.md rule 7),
// aggregated here. Order is the display order in the grid and nav.
export const usServices: UsService[] = [
  llcCorporationFormation,
  einItinServices,
  registeredAgentServices,
  businessTaxFiling,
  bookkeepingAccounting,
  salesTaxServices,
  annualCompliance,
  businessBankAccountAssistance,
  businessAddressMailServices,
  businessConsulting,
];
