# DataStax Demo App

This is a demo app for DataStax Astra DB with Vector Search using OpenAI for embeddings. It is built with Nuxt 3 for both client-side and server-side rendering, Tailwind CSS, TypeScript, and the Vue 3 Composition API.

## Getting Started

1. Run `npm install` to install required dependencies. See below for standard Nuxt instructions to build and run the app via alternative means.

2. To get started with Astra, see the [Astra documentation](https://docs.datastax.com/en/astra/docs/).

3. See `.env.example` for required settings prior to running the app, and copy to `.env.dev`, `.env.prod`, etc. as appropriate.

4. Then set your `NUXT_ENV` environment variable for the appropriate `.env` file, e.g. `export NUXT_ENV=dev`

5. Run `npm run dev` to start the app locally.

## Serverless Deployment

See `serverless.yml` with the Lift plugin (install required; instruction in the file) for deployment to AWS S3 and CloudFront with optional domain names for various environments.

Please note! Server-side rendering is not supported with this deployment method. Future enhancement is to migrate the server-side functions to AWS Lambda.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
