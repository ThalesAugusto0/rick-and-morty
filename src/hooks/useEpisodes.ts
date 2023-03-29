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
    let ids = "";
    for (let i = 1; i <= 51; i++) {
      ids += i + ",";
    }
    ids = ids.slice(0, -1); 

    const result = await api.get(`/episode/[${ids}]`);

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
