import { StyledThemeToggler } from "../styles/ThemeToggler.styled";

interface Props {
  option1: JSX.Element | string;
  option2: JSX.Element | string;
  onClick: any;
}

function ThemeToggler({ option1, option2, onClick }: Props) {
  return (
    <StyledThemeToggler onClick={onClick}>
      <span>{option1}</span>
      <span>{option2}</span>
      <span className="mark"></span>
    </StyledThemeToggler>
  );
}

export default ThemeToggler;
