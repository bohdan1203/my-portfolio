import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";

function Resume() {
  const { language, textContent } = useLanguages();

  return <h1>{textContent[language as Language].pageTitle.resume}</h1>;
}

export default Resume;
