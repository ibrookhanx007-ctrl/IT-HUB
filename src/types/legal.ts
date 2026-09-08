export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPageContent {
  seo: {
    title: string;
    description: string;
  };
  heading: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}
