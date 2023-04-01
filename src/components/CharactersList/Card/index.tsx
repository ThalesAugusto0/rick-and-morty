import { useState, useEffect } from "react";
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
  favorited,
  onFavoriteClick,
}: CharacterData) => {
  const [isFavorited, setIsFavorited] = useState(favorited || false);

  useEffect(() => {
    setIsFavorited(favorited || false);
  }, [favorited]);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    onFavoriteClick(id);
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
        <FavoriteIcon favorited={isFavorited} />
      </FavoriteButton>
    </Container>
  );
};
