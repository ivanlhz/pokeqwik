import {
  component$,
  Resource,
  useResource$,
  useSignal,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Pokecard from "~/components/pokecard/pokecard";
import { API_URL } from "~/config";
import type { Pokemon } from "~/domain";
import { GetPokemonsHttpService } from "~/infrastructure/GetPokemonsHttpService";

export default component$(() => {
  const itemsPerPage = 30;
  const maxOffset = 150 - itemsPerPage;
  const page = useSignal(0)
  const offset = itemsPerPage * page.value ;

  const pokemonApiResource = useResource$<Pokemon[]>(async ({ track }) => {
    const pagination = track(() => page.value);
    const pokeApi = new GetPokemonsHttpService(API_URL);

    const _offset = itemsPerPage * pagination;
    return await pokeApi.getPokemons(_offset, itemsPerPage);
  });


  return (
    <>
      <Resource
        value={pokemonApiResource}
        onResolved={(pokemons) => {
          return (
            <div class="p-4">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-10">
                {pokemons.map((pokemon) => (
                  <Pokecard key={pokemon.id} pokemon={pokemon} />
                ))}
              </div>
              <div class="join mt-6 grid grid-cols-2 gap-4">
                <button disabled={page.value === 0} onClick$={() => page.value--} class="btn btn-secondary join-item">Previous page</button> 
                <button disabled={offset >= maxOffset} onClick$={() => page.value++} class="btn btn-primary join-item">Next</button>
              </div>
            </div>
          );
        }}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "Site where you can find a pokemon api implementation with qwik",
    },
  ],
};
