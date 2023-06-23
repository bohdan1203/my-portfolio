import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "./interfaces/CustomTheme";

export const GlobalStyles = createGlobalStyle<{ theme: CustomTheme }>`
    * {
        transition: all 200ms ease-out;
    }

    body {
        background-color: ${({ theme }) =>
          theme.darkMode ? "black" : "white"};
        color: ${({ theme }) => (theme.darkMode ? "white" : "black")};
    }
`;
