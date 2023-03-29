import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

import {
  Container,
  HomeInfoContainer,
  HomeInfoText,
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
          <HomeInfoText>
            Código feito para realizar o teste na empresa Green Acesso
          </HomeInfoText>

          <CTAButtonContainer>
            <CTAButton onClick={handleCharacters}>Personagens</CTAButton>
            <CTAButton onClick={handleEpisodes}>Episódios</CTAButton>
          </CTAButtonContainer>
        </HomeInfoContainer>
    </Container>
  );
}
