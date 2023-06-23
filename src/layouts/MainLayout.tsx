import { Outlet } from "react-router-dom";
import { StyledMainContainer } from "../styles/MainContainer.styled";

function MainLayout() {
  return (
    <StyledMainContainer>
      <Outlet />
    </StyledMainContainer>
  );
}

export default MainLayout;
