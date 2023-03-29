import { useState } from "react";
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
}

interface CardListProps {
  characters: CharacterData[];
}

export const CharactersList = ({ characters }: CardListProps) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredCharacters = characters.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Personagens</Title>
      </TitleContainer>
      <SearchContainer>
        <input
          type="text"
          placeholder="Pesquisar"
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
          />
        ))}
      </GridContainer>
    </Container>
  );
};
