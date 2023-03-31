import { useEffect, useState } from "react";
import { CharactersList } from "../../components/CharactersList";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import useCharacters from "../../hooks/useCharacters";
import { ContentContainer } from "./styles";

export function Characters() {
  const { characters, fetchCharacters, totalPages } = useCharacters();
  const [page, setPage] = useState(1);

  const handlePages = (updatePage: number) => {
    if (updatePage <= 0) {
      setPage(1);
    }

    setPage(updatePage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchCharacters(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <Header />
      <ContentContainer>
        <CharactersList characters={characters} />
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePages={handlePages}
        />
      </ContentContainer>
    </div>
  );
}
