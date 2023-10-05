import { useCallback } from 'react';
import styled from 'styled-components';
import { useGetPokemonList } from './api';
import { PokemonCard } from './components/PokemonCard';
import { Spinner } from './components/Spinner';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: start;
  row-gap: 2rem;
`;

export const App = () => {
  const { data, isFetching, isLoading, fetchNextPage } = useGetPokemonList();

  const getIsLast = useCallback(
    (name: string) => {
      if (!data) {
        return false;
      }

      return data.pages.at(-1)?.results.at(-1)?.name === name;
    },
    [data],
  );

  const triggerNextFetch = useCallback(() => {
    if (isFetching) return;

    fetchNextPage();
  }, [fetchNextPage, isFetching]);

  return (
    <>
      <header style={{ gridArea: 'header' }}>
        <h1>Pokémon</h1>
        {(isFetching || isLoading) && <Spinner />}
      </header>
      <main style={{ gridArea: 'main' }}>
        <StyledList>
          {data?.pages.map((page) =>
            page.results.map((pokemon) => (
              <PokemonCard
                name={pokemon.name}
                key={pokemon.name}
                getIsLast={getIsLast}
                triggerNextFetch={triggerNextFetch}
              />
            )),
          )}
        </StyledList>
      </main>
    </>
  );
};
