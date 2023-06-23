interface PageTitle {
  home: string;
  portfolio: string;
  resume: string;
  contacts: string;
  about: string;
  pageNotFound: string;
}

interface ButtonText {
  viewProject: string;
  moreDetails: string;
  back: string;
}

interface Description {
  speedType: string;
}

interface LanguageSet {
  pageTitle: PageTitle;
  buttonText: ButtonText;
  description: Description;
}

export interface TextContent {
  en: LanguageSet;
  ua: LanguageSet;
}
