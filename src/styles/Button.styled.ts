import styled from "styled-components";

import { STYLE_CONSTANTS } from "./styleContstants";

const {
  colors: { primaryDark, primaryLight },
} = STYLE_CONSTANTS;

export const Button = styled.button`
  background-color: transparent;
  padding: 0.5rem 2rem;
  font-family: inherit;
  font-size: 1.5rem;
  border: 2px solid;
  border-radius: 8px;
  background-color: ${({ theme: { darkMode } }) =>
    darkMode ? primaryDark : primaryLight};
  color: currentColor;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease-out;

  &:hover {
    color: orangered;
  }
`;

export const HugeButton = styled(Button)`
  transform: scale(1.5);
  margin: 5rem auto 0;
`;
