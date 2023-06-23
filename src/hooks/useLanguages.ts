import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageProvider";

function useLanguages() {
  return useContext(LanguageContext);
}

export default useLanguages;
