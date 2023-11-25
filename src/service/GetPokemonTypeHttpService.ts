import type { PokemonType } from "~/model";
import {GetPokemonTypeRepository} from "~/repository";

export class GetPokemonTypeHttpService implements GetPokemonTypeRepository {
  constructor(private apiURL: string) {}

  getType = async (id: string) => {
    const url = `${this.apiURL}/type/${id}`;
    const response = await fetch(url);
    return (await response.json()) as PokemonType;
  };
}
