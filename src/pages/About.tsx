import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";

function About() {
  const { language, textContent } = useLanguages();

  return <h1>{textContent[language as Language].pageTitle.about}</h1>;
}

export default About;
