import type { GetPokemonsRepository, Pokemon, PokemonRaw } from "~/domain";

export class GetPokemonsHttpService implements GetPokemonsRepository {
  constructor(private apiURL: string) {}

  getPokemonById = async (id: string) => {
    const url = `${this.apiURL}/pokemon/${id}`;
    const response = await fetch(url);
    return (await response.json()) as Pokemon;
  };

  getPokemons = async (offset: number, limit: number) => {
    const url = `${this.apiURL}/pokemon/?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const pokemonsRaw = (await response.json()).results as PokemonRaw[];
    const promises = pokemonsRaw.map(
      async ({ name }) => await this.getPokemonById(name),
    );
    return (await Promise.all(promises)) as Pokemon[];
  };
}
