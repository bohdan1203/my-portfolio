import { createContext, useState, ReactNode } from "react";

import { Language } from "../interfaces/Language";
import { TextContent } from "../interfaces/TextContents";

import { TEXT_CONTENT } from "../data/textContent";

export const LanguageContext = createContext<{
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  textContent: TextContent;
}>({
  language: "en",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLanguage: () => {},
  textContent: TEXT_CONTENT,
});

interface Props {
  children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>("en");

  const languageContext = { language, setLanguage, textContent: TEXT_CONTENT };

  return (
    <LanguageContext.Provider value={languageContext}>
      {children}
    </LanguageContext.Provider>
  );
}
