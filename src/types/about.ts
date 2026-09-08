export interface AboutValue {
  title: string;
  description: string;
  /** lucide-react icon name. */
  icon: string;
}

export interface AboutContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    description: string;
  };
  story: {
    heading: string;
    paragraphs: string[];
  };
  mission: {
    heading: string;
    statement: string;
  };
  vision: {
    heading: string;
    statement: string;
  };
  values: {
    heading: string;
    items: AboutValue[];
  };
  team: {
    heading: string;
    emptyState: string;
  };
}
