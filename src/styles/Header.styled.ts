import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const { spacings } = STYLE_CONSTANTS;

export const StyledHeader = styled.header`
  background-color: hotpink;
  padding: ${spacings.sm} ${spacings.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  & .active-link {
    color: yellow;
  }
`;
