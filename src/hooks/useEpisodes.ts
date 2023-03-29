import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import { CharacterData } from "./useCharacters";

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterData[];
  created: string;
}

export default function useEpisodes() {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([] as EpisodeData[]);
  const [totalPages, setTotalPages] = useState(0);
  const [allEpisodes, setAllEpisodes] = useState<EpisodeData[]>(
    [] as EpisodeData[]
  );

  function fetchEpisodes(page: number) {
    api.get(`/episode/?page=${page}`).then((response) => {
      setEpisodes(response.data.results);
      setTotalPages(response.data.info.pages);
    });
  }

  async function getAllEpisodes() {
    const result = await api.get(
      `/episode/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]`
    );

    setAllEpisodes(result.data);
  }

  const filterEpisodesBySeason = useCallback(
    async (season: string) => {
      return allEpisodes.filter((item: EpisodeData) =>
        item.episode.includes(season)
      );
    },
    [allEpisodes]
  );

  useEffect(() => {
    getAllEpisodes();
  }, []);

  return {
    episodes,
    fetchEpisodes,
    totalPages,
    filterEpisodesBySeason,
  };
}
