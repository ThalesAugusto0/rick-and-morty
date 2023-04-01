import { useState } from "react";
import {
  Container,
  ImageContainer,
  Name,
  Species,
  Status,
  Gender,
  Origin,
  InfoContainer,
  TextContainer,
  FavoriteButton,
  FavoriteIcon,
} from "./styles";

interface CharacterData {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  favorited?: boolean;
  onFavoriteClick: (id: number) => void;
}

export const Card = ({
  id,
  name,
  status,
  image,
  species,
  gender,
  origin,
  location,
}: CharacterData) => {
  const [favorited, setFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setFavorited(!favorited);
  };

  return (
    <Container>
      <ImageContainer src={image} />

      <Name>{name}</Name>

      <InfoContainer>
        Espécies:
        <Species>{species}</Species>
      </InfoContainer>

      <InfoContainer>
        Status:
        <Status>{status}</Status>
      </InfoContainer>

      <InfoContainer>
        Gênero:
        <Gender>{gender}</Gender>
      </InfoContainer>

      <TextContainer>Origem:</TextContainer>

      <InfoContainer>
        <Origin>{origin.name}</Origin>
      </InfoContainer>

      <FavoriteButton onClick={handleFavoriteClick}>
        <FavoriteIcon favorited={favorited} />
      </FavoriteButton>
    </Container>
  );
};
