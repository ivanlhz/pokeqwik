export interface Pokemon extends PokemonRaw {
  id: number;
  types: PokemonType[];
  sprites: Sprite;
  stats: [];
}

export interface Sprite {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface PokemonRaw {
  name: string;
  url: string;
}

export interface PokemonType {
  id: number;
  name: string;
}

