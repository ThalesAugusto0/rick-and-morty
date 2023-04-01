import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

import {
  Container,
  HomeInfoContainer,
  HomeInfoTitle,
  CTAButton,
  CTAButtonContainer,
} from "./styles";

export function Home() {
  const navigate = useNavigate();

  const handleCharacters = () => {
    navigate("/characters");
  };

  const handleEpisodes = () => {
    navigate("/episodes");
  };

  return (
    <Container>
      <Header />
        <HomeInfoContainer>
          <HomeInfoTitle>Bem vindo</HomeInfoTitle>

          <CTAButtonContainer>
            <CTAButton onClick={handleCharacters}>Personagens</CTAButton>
            <CTAButton onClick={handleEpisodes}>Episódios</CTAButton>
          </CTAButtonContainer>
          
        </HomeInfoContainer>
    </Container>
  );
}
