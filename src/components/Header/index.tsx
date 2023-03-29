import { useNavigate } from "react-router-dom";

import { NavBar } from "./NavBar";

import { Container, Logo } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Logo src="logo.png" onClick={handleLogoClick} />
      <NavBar />
    </Container>
  );
};
