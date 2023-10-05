export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};

export type PokemonResponse = {
  results: Array<{
    url: string;
    name: string;
  }>;
  count: number;
};
