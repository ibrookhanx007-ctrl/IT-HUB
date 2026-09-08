export interface AboutValue {
  title: string;
  description: string;
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
}
