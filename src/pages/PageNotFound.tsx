import { useNavigate } from "react-router-dom";

import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";
import { Button } from "../styles/Button.styled";

function PageNotFound() {
  const navigate = useNavigate();
  const { language, textContent } = useLanguages();

  return (
    <>
      <h1>{textContent[language as Language].pageTitle.pageNotFound}</h1>
      <Button onClick={() => navigate(-1)}>
        {textContent[language as Language].buttonText.back}
      </Button>
    </>
  );
}

export default PageNotFound;
