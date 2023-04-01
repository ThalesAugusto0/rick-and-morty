import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Container, Title, TitleContainer, GridContainer, SearchContainer } from "./styles";

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

interface CardListProps {
  characters: CharacterData[];
}

export const CharactersList = ({ characters }: CardListProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const favoritesFromStorage = sessionStorage.getItem("favorites");
    if (favoritesFromStorage) {
      const parsedFavorites = JSON.parse(favoritesFromStorage);
      if (Array.isArray(parsedFavorites)) {
        setFavorites(parsedFavorites);
      } else {
        clearFavorites();
      }
    } else {
      clearFavorites();
    }
  }, []);

  useEffect(() => {
    saveFavoritesToStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  const clearFavorites = () => {
    sessionStorage.setItem("favorites", JSON.stringify([]));
  };

  const saveFavoritesToStorage = () => {
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const filteredCharacters = characters.filter((item) =>
    Object.values(item).some(
      (value) => typeof value === "string" &&
      value.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleFavoriteClick = (id: number) => {
    const index = favorites.indexOf(id);
    let newFavorites = [...favorites];
    if (index === -1) {
      newFavorites.push(id);
    } else {
      newFavorites.splice(index, 1);
    }
    setFavorites(newFavorites);
  };
  

  return (
    <Container>
      <TitleContainer>
        <Title>Personagens</Title>
      </TitleContainer>
      <SearchContainer>
        <input
          type="text"
          placeholder="Pesquise os personagens"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </SearchContainer>
      <GridContainer>
        {filteredCharacters.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            image={item.image}
            species={item.species}
            gender={item.gender}
            origin={item.origin}
            location={item.location}
            favorited={favorites.includes(item.id)}
            onFavoriteClick={handleFavoriteClick}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

