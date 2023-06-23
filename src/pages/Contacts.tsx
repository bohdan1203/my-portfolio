import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";

function Contacts() {
  const { language, textContent } = useLanguages();

  return <h1>{textContent[language as Language].pageTitle.contacts}</h1>;
}

export default Contacts;
