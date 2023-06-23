import { createContext, useState, ReactNode } from "react";

import { Language } from "../interfaces/Language";

export const LanguageContext = createContext<{
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}>({
  language: "en",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLanguage: () => {},
});

interface Props {
  children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>("en");

  const languageContext = { language, setLanguage };

  return (
    <LanguageContext.Provider value={languageContext}>
      {children}
    </LanguageContext.Provider>
  );
}
