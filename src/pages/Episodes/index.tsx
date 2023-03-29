import { useEffect, useState } from "react";

import { CustomSlider } from "../../components/CustomSlider";
import { Header } from "../../components/Header";

import useEpisodes from "../../hooks/useEpisodes";
import { CharacterData } from "../../hooks/useCharacters";

import {
  Container,
  ContentContainer,
  PageTitle,
  SliderContainer,
  SeasonTitle,
} from "./styles";

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterData[];
  created: string;
}

export function Episodes() {
  const [season1, setSeason1] = useState<EpisodeData[]>([] as EpisodeData[]);
  const [season2, setSeason2] = useState<EpisodeData[]>([] as EpisodeData[]);
  const [season3, setSeason3] = useState<EpisodeData[]>([] as EpisodeData[]);
  const [season4, setSeason4] = useState<EpisodeData[]>([] as EpisodeData[]);
  const [season5, setSeason5] = useState<EpisodeData[]>([] as EpisodeData[]);
  const { filterEpisodesBySeason } = useEpisodes();

  useEffect(() => {
    filterEpisodesBySeason("S01").then((response) => setSeason1(response));
    filterEpisodesBySeason("S02").then((response) => setSeason2(response));
    filterEpisodesBySeason("S03").then((response) => setSeason3(response));
    filterEpisodesBySeason("S04").then((response) => setSeason4(response));
    filterEpisodesBySeason("S05").then((response) => setSeason5(response));
  }, [filterEpisodesBySeason]);

  return (
    <Container>
      <Header />

      <ContentContainer>
        <PageTitle>Episódios</PageTitle>

        <SliderContainer>
          <SeasonTitle>Temporada 1</SeasonTitle>
          <CustomSlider episodes={season1} />
        </SliderContainer>

        <SliderContainer>
          <SeasonTitle>Temporada 2</SeasonTitle>
          <CustomSlider episodes={season2} />
        </SliderContainer>

        <SliderContainer>
          <SeasonTitle>Temporada 3</SeasonTitle>
          <CustomSlider episodes={season3} />
        </SliderContainer>

        <SliderContainer>
          <SeasonTitle>Temporada 4</SeasonTitle>
          <CustomSlider episodes={season4} />
        </SliderContainer>

        <SliderContainer>
          <SeasonTitle>Temporada 5</SeasonTitle>
          <CustomSlider episodes={season5} />
        </SliderContainer>
      </ContentContainer>
    </Container>
  );
}
