import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { Pokemon, PokemonResponse } from './types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<PokemonResponse> => {
  const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  const data = await res.json();
  return data;
};

export const getCount = async (): Promise<PokemonResponse> => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const res = await fetch(`${BASE_URL}/${name}`);
  const data = await res.json();
  return data;
};

export const useGetPokemonList = () => {
  const remainingToFetch = useRef(0);

  const { data: count, isLoading: isCountLoading } = useQuery({
    queryKey: ['pokemonCount'],
    queryFn: getCount,
    select: (data) => data.count,
    onSuccess: (c) => {
      remainingToFetch.current = c;
    },
    staleTime: Infinity,
  });

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ['pokemon-list'],
    queryFn: ({ pageParam = 0 }) => getPokemonList({ limit: 10, offset: pageParam * 10 }),
    getNextPageParam: (_, allPages) => {
      if (remainingToFetch.current <= 0) {
        return undefined;
      }
      remainingToFetch.current -= 10;
      return allPages.length;
    },
    enabled: !!count,
  });

  return {
    data,
    isLoading: isLoading || isCountLoading,
    isFetching,
    fetchNextPage: () => fetchNextPage(),
  } as const;
};

export const useGetPokemon = (name: string) =>
  useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(name),
    staleTime: Infinity,
  });
