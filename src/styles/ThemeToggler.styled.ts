import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const { spacings } = STYLE_CONSTANTS;

export const StyledThemeToggler = styled.div`
  cursor: pointer;
  border: 2px solid;
  display: flex;
  align-items: center;
  gap: ${spacings.xs};
  padding: ${spacings.xxs};
  border-radius: 9999px;

  height: 2rem;
  position: relative;

  & span {
    width: ${spacings.sm};
    height: ${spacings.sm};
  }

  & .mark {
    background-color: currentColor;
    border-radius: 9999px;
    position: absolute;
    transform: translateX(
      ${({ theme: { darkMode } }) =>
        darkMode ? `calc(100% + ${spacings.xs})` : "0"}
    );
  }
`;
