import { Card } from "./Card";

import { CharacterData } from "../../hooks/useCharacters";
import { Container } from "./styles";

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterData[];
  created: string;
}

export const EpisodesList = (props: EpisodeData) => {
  const { id, name, air_date, episode, characters, created } = props;

  return (
    <Container>
      <Card
        id={id}
        name={name}
        air_date={air_date}
        episode={episode}
        characters={characters}
        created={created}
      />
    </Container>
  );
};
