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
      <EpisodeAirDate>Released in: {air_date}</EpisodeAirDate>
      <EpisodeCreated>
        Created in: {formatDate(new Date(created))}
      </EpisodeCreated>
    </Container>
  );
};
