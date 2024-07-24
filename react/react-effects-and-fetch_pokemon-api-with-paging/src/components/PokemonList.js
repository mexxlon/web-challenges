import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(currentPage);
        const data = await response.json();
        setPokemon(data.results);
        setPrevPage(data.previous);
        setNextPage(data.next);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentPage]);

  const goToPrevPage = () => {
    if (prevPage) {
      setCurrentPage(prevPage);
    }
  };

  const goToNextPage = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <main>
      <button type="button" onClick={goToPrevPage} disabled={!prevPage}>
        Previous Page
      </button>
      <button type="button" onClick={goToNextPage} disabled={!nextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
