import type { PokemonType } from "../model/Pokemon";

export interface GetPokemonTypeRepository {
  getType: (id: string) => Promise<PokemonType>;
}
