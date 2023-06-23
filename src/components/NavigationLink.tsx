import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  textContent: string;
}

function NavigationLink({ to, textContent }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      {textContent}
    </NavLink>
  );
}

export default NavigationLink;
