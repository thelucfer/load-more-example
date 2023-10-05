import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useGetPokemon } from '../api';
import { Spinner } from './Spinner';

const StyledCard = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;

  border: 1px solid var(--color-foreground);
  border-radius: 1rem;
  width: 30rem;
`;

export const PokemonCard = ({
  name,
  getIsLast,
  triggerNextFetch,
}: {
  name: string;
  getIsLast: (name: string) => boolean;
  triggerNextFetch: () => void;
}) => {
  const pokemon = useGetPokemon(name);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 'all' });

  useEffect(() => {
    if (!inView || !pokemon.data) return;
    if (!getIsLast(pokemon.data.name)) return;

    triggerNextFetch();
  }, [inView, getIsLast, triggerNextFetch, pokemon.data]);

  return (
    <StyledCard ref={ref}>
      <h2>{name}</h2>
      {pokemon.isLoading ? (
        <Spinner />
      ) : (
        <img src={pokemon.data?.sprites.front_default} alt={name} />
      )}
    </StyledCard>
  );
};
