import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { API_URL } from "~/config";
import type { Pokemon } from "~/domain";
import { GetPokemonsHttpService } from "~/infrastructure/GetPokemonsHttpService";

export default component$(() => {
  const paginationStore = useStore({
    offset: 0,
    limit: 150,
  });

  const pokemonApiResource = useResource$<Pokemon[]>(async ({ track }) => {
    const pagination = track(() => paginationStore);
    const pokeApi = new GetPokemonsHttpService(API_URL);
    return await pokeApi.getPokemons(
      pagination.offset,
      pagination.limit,
    );
  });

  return (
    <>
      <Resource
        value={pokemonApiResource}
        onResolved={(pokemons) => {
          return (
            <div class="container container-center container-spacing-xl">
              <h3>Pokemon list</h3>

                <ul>
                  {pokemons.map((pokemon) => (
                    <li key={Math.random()}>
                      <span>{pokemon.name}</span>
                    </li>
                  ))}
                </ul>
            </div>
          );
        }}
      />

        <button class="btn">Button</button>

    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to PokeQwik",
  meta: [
    {
      name: "description",
      content: "Site where you can find a pokemon api implementation with qwik",
    },
  ],
};
