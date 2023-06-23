import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "../interfaces/CustomTheme";
import { STYLE_CONSTANTS } from "./styleContstants";

const { colors } = STYLE_CONSTANTS;

export const GlobalStyles = createGlobalStyle<{ theme: CustomTheme }>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 200ms ease-out;
  }

  body {
    background-color: ${({ theme }) =>
      theme.darkMode ? colors.black : colors.white};
    color: ${({ theme }) => (theme.darkMode ? colors.white : colors.black)};
    font-family: "Montserrat", sans-serif;
  }

  h1, h2, h3 {
    font-family: "Oswald", sans-serif;
  }

  a {
    text-decoration: none;
  }

  select {
    font-family: inherit;
  }
`;
