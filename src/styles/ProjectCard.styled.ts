import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const { colors, spacings } = STYLE_CONSTANTS;

export const StyledProjectCard = styled.article`
  margin: 0 auto;
  max-width: 40rem;
  border-radius: 8px;
  box-shadow: 0 0 1rem 0 currentColor;
  padding: ${spacings.md};

  & h2 {
    text-align: center;
    font-size: ${spacings.md};
    margin-bottom: ${spacings.md};
  }

  & .image-container {
    max-width: 100%;
    aspect-ratio: 1.745/1;
    position: relative;
  }

  & .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  & img {
    width: 100%;
    border-radius: 8px;
    position: absolute;
  }

  & p {
    margin: ${spacings.sm} 0;
    font-size: 1.5rem;
  }

  & .buttons-container {
    display: flex;
    gap: ${spacings.sm};
    justify-content: space-evenly;
  }

  & button a {
    color: inherit;
  }

  @media (max-width: 700px) {
    & div {
      flex-direction: column;
    }
  }
`;
