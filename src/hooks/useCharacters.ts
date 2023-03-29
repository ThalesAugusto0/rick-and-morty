import { useState } from "react";
import { api } from "../services/api";

export interface CharacterData {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
}

export default function useCharacters() {
  const [characters, setCharacters] = useState<CharacterData[]>(
    [] as CharacterData[]
  );
  const [totalPages, setTotalPages] = useState(0);

  function fetchCharacters(page: number) {
    api.get(`/character/?page=${page}`).then((response) => {
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    });
  }

  return { characters, setCharacters, fetchCharacters, totalPages };
}
