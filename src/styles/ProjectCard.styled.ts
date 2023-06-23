import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const {
  spacings: { md, sm },
} = STYLE_CONSTANTS;

export const StyledProjectCard = styled.article`
  margin: 0 auto;
  max-width: 40rem;
  border-radius: 8px;
  box-shadow: 0 0 1rem 0 currentColor;
  padding: ${md};

  & h2 {
    text-align: center;
    font-size: ${md};
    margin-bottom: ${md};
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
    margin: ${sm} 0;
    font-size: 1.5rem;
  }

  & .buttons-container {
    display: flex;
    gap: ${sm};
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

  @media (max-width: 400px) {
    padding: ${sm};
    font-size: 1rem;

    & p {
      font-size: 1.25rem;
    }
  }
`;
