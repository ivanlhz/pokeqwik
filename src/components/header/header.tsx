import ImgLogo from "~/media/logo.png?jsx";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="navbar bg-base-100">
      <div class="flex-1">
        <div class="w-10 rounded-full">
          <ImgLogo alt="PokeQwik Logo" />
        </div>
        <h1 class="text-2xl font-bold ml-5">
          Poke<span class="text-sky-500">Qwik</span>
        </h1>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div class="dropdown dropdown-end"></div>
      </div>
    </header>
  );
});
