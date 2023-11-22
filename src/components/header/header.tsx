
import ImgLogo from '~/media/logo.png?jsx';import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
      <header class="navbar bg-base-100">
        <div class="flex-1">
         PokeQwik
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
          </div>
          <div class="dropdown dropdown-end">
              <div class="w-10 rounded-full">
                <ImgLogo alt="Tailwind CSS Navbar component" />
              </div>
          </div>
        </div>
      </header>
  );
});
