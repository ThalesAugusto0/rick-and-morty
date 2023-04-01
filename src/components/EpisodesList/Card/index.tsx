import { formatDate } from "../../../helpers/date";
import { CharacterData } from "../../../hooks/useCharacters";

import {
  Container,
  Title,
  EpisodeName,
  EpisodeAirDate,
  EpisodeCreated,
} from "./styles";

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterData[];
  created: string;
}

export const Card = ({
  id,
  name,
  air_date,
  episode,
  characters,
  created,
}: EpisodeData) => {
  return (
    <Container>
      <Title>{episode}</Title>
      <EpisodeName>{name}</EpisodeName>
      <EpisodeAirDate>Lançado em: {air_date}</EpisodeAirDate>
      <EpisodeCreated>
        Criado em: {formatDate(new Date(created))}
      </EpisodeCreated>
    </Container>
  );
};
