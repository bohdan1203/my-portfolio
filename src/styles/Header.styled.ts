import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const {
  colors: { primaryDark, primaryLight, white, black },
  spacings: { sm, lg },
} = STYLE_CONSTANTS;

export const StyledHeader = styled.header`
  background-color: ${({ theme: { darkMode } }) =>
    darkMode ? primaryDark : primaryLight};
  padding: ${sm} ${lg};
  display: flex;
  gap: ${lg};
  align-items: center;
  justify-content: space-between;

  & ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & a {
    font-weight: 600;
    color: ${({ theme: { darkMode } }) => (darkMode ? white : black)};
  }

  & .active-link {
    color: yellow;
  }
`;
