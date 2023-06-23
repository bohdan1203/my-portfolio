import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  border: 2px solid;
  border-radius: 8px;
  color: hotpink;
  cursor: pointer;
  transition: all 500ms ease-out;

  &:hover {
    color: orangered;
  }
`;
