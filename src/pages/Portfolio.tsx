import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";

import ProjectCard from "../components/ProjectCard";

import speedTypeImg from "../assets/images/speed-type.jpg";

function Portfolio() {
  const { language, textContent } = useLanguages();

  return (
    <>
      <section>
        <ProjectCard
          imgUrl={speedTypeImg}
          title="Speed Type"
          description={textContent[language as Language].description.speedType}
          projectLink="https://speed-type-frontend.onrender.com"
          detailsLink="/portfolio/speed-type"
        />
      </section>
    </>
  );
}

export default Portfolio;
