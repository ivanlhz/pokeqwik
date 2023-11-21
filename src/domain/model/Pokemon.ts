export interface Pokemon extends PokemonRaw {
  id: number;
  types: PokemonType[];
  sprites: string[];
  stats: [];
}

export interface PokemonRaw {
  name: string;
  url: string;
}

export interface PokemonType {
  id: number;
  name: string;
}

