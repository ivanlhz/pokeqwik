# PokeQwik App ⚡️
PokeQwik is a web application designed to showcase the first 150 Pokemon in a paginated format, displaying 30 Pokemon per page. The application is built using the Qwik framework, which provides a fast and efficient rendering system for web applications.

## Technologies Used:

- **Qwik Framework**: Qwik is chosen for its efficiency in rendering and providing a seamless user experience. It follows a component-based architecture, allowing for the easy organization of different parts of the application.

- **TailwindCSS + DaisyUI**: The application leverages the power of TailwindCSS for styling, ensuring a responsive and visually appealing design. The addition of DaisyUI, a component library for TailwindCSS, aids in building UI components more quickly and with consistency.

## Pagination:
The Pokemon list is presented in a paginated manner to enhance user navigation. Users can smoothly move through the pages, with each page containing details about 30 Pokemon. This ensures a manageable and organized presentation of information.

## Deployment:
For seamless deployment and hosting, Vercel is utilized. Vercel provides a platform for deploying web applications with ease, offering a fast and reliable hosting solution. This allows users to access the Pokemon Explorer from anywhere with an internet connection.

## Domain-Driven Design (DDD):
The application adheres to the fundamental concepts of Domain-Driven Design (DDD). It organizes its codebase based on the business domain, ensuring that the structure of the code aligns with the underlying problem domain. This approach enhances maintainability and scalability by creating a clear separation of concerns.

## Purpose:
PokemonQwik is not just a visual showcase but also a demonstration of how modern web technologies, frameworks, and design principles can be combined to create a performant and user-friendly application.

Explore the Pokemon world effortlessly with Pokemon Explorer, where the charm of the first 150 Pokemon meets cutting-edge web development.


---
## Extra Information 
<details>
    <summary>Qwik City App</summary>

### Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

### Add Integrations and deployment

Use the `bun qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).

```shell
bun qwik add # or `bun qwik add`
```

### Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `bun start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

### Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
bun preview # or `bun preview`
```

### Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
bun build # or `bun build`
```
</details>
<details>
    <summary> Vercel Edge</summary>
This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

### Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

### Production build

To build the application for production, use the `build` command, this command will automatically run `npm run build.server` and `npm run build.client`:

```shell
npm run build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adapters/vercel-edge/README.md)

### Dev deploy

To deploy the application for development:

```shell
npm run deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

### Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.

</details>


