import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const { spacings } = STYLE_CONSTANTS;

export const StyledSettingsSection = styled.section`
  display: flex;
  gap: ${spacings.lg};
  padding: ${spacings.xs};
  background-color: yellow;
`;
