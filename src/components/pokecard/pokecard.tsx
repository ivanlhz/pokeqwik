import { component$ } from "@builder.io/qwik";
import type { Pokemon } from "~/domain";

export default component$<{ pokemon: Pokemon }>(({ pokemon }) => {
  return (
    <div class="card bg-white shadow-xl">
      <figure>
        <img
          src={pokemon.sprites.front_default}
          alt="Shoes"
          width="96"
          height="96"
        />
      </figure>
      <div class="card-body bg-neutral">
        <h2 class="card-title">{pokemon.id}</h2>
        <p>{pokemon.name}</p>
      </div>
    </div>
  );
});
