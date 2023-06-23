import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const {
  spacings: { lg, md, sm },
} = STYLE_CONSTANTS;

export const StyledMainContainer = styled.main`
  padding: ${lg};

  @media (max-width: 600px) {
    padding: ${lg} ${md};
  }

  @media (max-width: 400px) {
    padding: ${lg} ${sm};
  }
`;
