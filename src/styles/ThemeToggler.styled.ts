import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const { spacings } = STYLE_CONSTANTS;

export const StyledThemeToggler = styled.div`
  cursor: pointer;
  background-color: green;
  display: flex;
  align-items: center;
  gap: ${spacings.xs};
  padding: ${spacings.xxs} ${spacings.xs};
  border-radius: 9999px;
  position: relative;

  & span {
    width: ${spacings.sm};
    height: ${spacings.sm};
  }

  & .mark {
    background-color: red;
    border-radius: 9999px;
    position: absolute;
    transform: translateX(
      ${({ theme: { darkMode } }) =>
        darkMode ? "0" : `calc(100% + ${spacings.xs})`}
    );
  }
`;
