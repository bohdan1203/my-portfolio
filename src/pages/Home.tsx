import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";

function Home() {
  const { language, textContent } = useLanguages();

  return <h1>{textContent[language as Language].pageTitle.home}</h1>;
}

export default Home;
