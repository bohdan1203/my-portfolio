import { Link } from "react-router-dom";

import { StyledProjectCard } from "../styles/ProjectCard.styled";
import { Button } from "../styles/Button.styled";

import useLanguages from "../hooks/useLanguages";
import { Language } from "../interfaces/Language";

interface Props {
  title: string;
  imgUrl: string;
  description: string;
  projectLink: string;
  detailsLink: string;
}

function ProjectCard({
  title,
  imgUrl,
  description,
  projectLink,
  detailsLink,
}: Props) {
  const { language, textContent } = useLanguages();

  return (
    <StyledProjectCard>
      <h2>{title}</h2>
      <div className="image-container">
        <div className="image-placeholder">Image is loading...</div>
        <img src={imgUrl} alt={title} loading="lazy" />
      </div>
      <p>{description}</p>
      <div className="buttons-container">
        <Button>
          <a href={projectLink} target="_blank">
            {textContent[language as Language].buttonText.viewProject}
          </a>
        </Button>
        <Button as={Link} to={detailsLink}>
          {textContent[language as Language].buttonText.moreDetails}
        </Button>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
