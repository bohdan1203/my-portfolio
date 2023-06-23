import { useNavigate } from "react-router-dom";

import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";
import { HugeButton } from "../styles/Button.styled";

function PageNotFound() {
  const navigate = useNavigate();
  const { language, textContent } = useLanguages();

  return (
    <>
      <h1>{textContent[language as Language].pageTitle.pageNotFound}</h1>
      <HugeButton onClick={() => navigate(-1)}>
        {textContent[language as Language].buttonText.back}
      </HugeButton>
    </>
  );
}

export default PageNotFound;
