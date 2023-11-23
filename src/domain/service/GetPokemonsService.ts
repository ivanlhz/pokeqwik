import type { Pokemon } from "../model/Pokemon";
import type { GetPokemonsRepository } from "../repository/GetPokemonsRepository";

export class GetPokemonService {
  constructor(private pokemonsGetter: GetPokemonsRepository) {}

  getPokemons(offset: number, limit: number): Promise<Pokemon[]> {
    return this.pokemonsGetter.getPokemons(offset, limit);
  }

  getPokemonById(id: string): Promise<Pokemon> {
    return this.pokemonsGetter.getPokemonById(id);
  }
}
