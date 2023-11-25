import type { Pokemon } from "~/model/Pokemon";

export interface GetPokemonsRepository {
  getPokemons: (offset: number, limit: number) => Promise<Pokemon[]>;
  getPokemonById: (id: string) => Promise<Pokemon>;
}
