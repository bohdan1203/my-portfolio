import styled from "styled-components";
import { STYLE_CONSTANTS } from "./styleContstants";

const { spacings } = STYLE_CONSTANTS;

export const StyledSettingsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${spacings.lg};
`;
