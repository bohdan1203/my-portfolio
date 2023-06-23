import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const { colors, spacings } = STYLE_CONSTANTS;

export const StyledSelect = styled.select`
  background-color: ${colors.white};
  color: ${colors.black};
  border: none;
  border-radius: 8px;

  & option {
    background-color: red;
    color: yellow;
    margin-bottom: 1rem;

    &:hover {
      background-color: green;
    }
  }
`;
