import ImgLogo from "~/media/logo.png?jsx";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="navbar bg-neutral sticky top-0 z-10">
      <div class="flex-1">
        <div class="w-10 rounded-full">
          <ImgLogo alt="PokeQwik Logo" />
        </div>
        <h1 class="text-2xl font-bold ml-5">
          Poke<span class="text-sky-500">Qwik</span>
        </h1>
      </div>
    </header>
  );
});
