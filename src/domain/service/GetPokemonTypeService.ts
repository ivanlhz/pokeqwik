import type { PokemonType } from "../model/Pokemon";
import type { GetPokemonTypeRepository } from "../repository/GetPokemonTypeRepository";

export class GetPokemonTypeService {
  constructor(private typeGetter: GetPokemonTypeRepository) {}

  getType(id: string): Promise<PokemonType> {
    return this.typeGetter.getType(id);
  }
}
