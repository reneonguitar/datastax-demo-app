<script setup lang="ts">
  import {
    ArrowTrendingUpIcon,
    CheckIcon,
    CircleStackIcon,
    GlobeAltIcon,
  } from '@heroicons/vue/24/outline';

  const features = [
    {
      name: 'Frontend Tech Stack',
      list: [
        'Nuxt Single Page App (SPA)',
        'Vue Composition API',
        'TypeScript',
        'Tailwind CSS',
        'Headless UI',
        'Hero Icons',
        'Vite',
        'AWS S3',
        'AWS CloudFront',
        'Serverless Framework',
      ],
      icon: GlobeAltIcon,
    },
    {
      name: 'Backend Tech Stack',
      list: [
        'Nuxt Nitro local Server Side Rendering (SSR)',
        'DataStax Astra DB with Vector Search',
        'Subset of MovieLens Research Latest Dataset',
        'DataStax Node.js Driver for Apache Cassandra',
        'OpenAI Embeddings API',
      ],
      icon: CircleStackIcon,
    },
    {
      name: 'Future Improvements',
      list: [
        'Migrate Server Side Rendering (SSR) to AWS API Gateway, AppSync, and Lambda',
        'Mirgate Single Page App (SPA) to Static Generated Site (SSG)',
        'Integrate Movie API for Poster Images',
        'Extend Astra DB with Movie Rating and Tag Data',
        'Replace Keyword Query with User Watch History for Automated Recommendations',
      ],
      icon: ArrowTrendingUpIcon,
    },
  ];
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Behind the Scenes
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        How CineMatch was built and how it works.
      </p>
    </div>

    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.name"
          class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
              <component
                :is="feature.icon"
                class="h-6 w-6 text-white"
                aria-hidden="true" />
            </div>
            {{ feature.name }}
          </dt>
          <dd
            class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <div
              v-for="(item, index) in feature.list"
              :key="index"
              class="flex items-center mt-2">
              <CheckIcon
                class="h-5 w-5 text-purple-500 mr-2 flex-none"
                aria-hidden="true" />
              <p class="flex-auto">{{ item }}</p>
            </div>
          </dd>
        </div>
      </dl>
    </div>

    <BaseSectionHeading class="mt-16">Solution Notes</BaseSectionHeading>

    <div class="my-8">
      The solution's UML sequence diagram in Figure 1 shows two main phases to
      the demo:
      <ul class="list-decimal list-inside mt-3">
        <li>Seeding a vectorized database</li>
        <li>
          User interaction with the single page application to conduct a movie
          recommendation search
        </li>
      </ul>
    </div>

    <figure class="">
      <img
        src="~/assets/cinematch/solution-sequence-diagram.svg"
        alt="Solution UML Sequence Diagram" />
      <figcaption class="text-gray-500 text-sm italic">
        Figure 1. Solution UML Sequence Diagram
      </figcaption>
    </figure>

    <div class="mb-8 mt-16 space-y-4">
      <BaseSectionHeading>Seeding the Database</BaseSectionHeading>

      <p>
        The first phase of the demo is to seed the database with a subset of the
        MovieLens Research Latest Dataset, consisting of 150 movies. The dataset
        is available for download from the MovieLens website.
      </p>

      <p>
        <NuxtLink
          to="https://files.grouplens.org/datasets/movielens/ml-latest-small-README.html"
          class="text-purple-500"
          target="_blank">
          https://files.grouplens.org/datasets/movielens/ml-latest-small-README.html
        </NuxtLink>
      </p>

      <BaseSectionHeading class="my-8">Code Structure</BaseSectionHeading>

      <p>
        The Nuxt single page app (SPA) consists of the following file and folder
        structure:
      </p>

      <pre>
    . 
    ├── components
    │   ├── BaseContentHeading.vue
    │   ├── BasePageHeading.vue
    │   ├── BaseSectionHeading.vue
    │   ├── CineMatchMovieCard.vue
    │   ├── CineMatchQuery.vue
    │   └── CineMatchResults.vue
    ├── pages
    │   ├── cinematch
    |   |   ├── behind-the-scenes.vue // This Page
    |   |   ├── index.vue // Demo Page
    │   └── index.vue // Home Page
    └── server
        ├── api
        │   ├── datastax
        │   │   ├── astradb
        │   │   │   ├── vector-search.ts
        │   │   ├── openai
        │   │   │   ├── embedding.post.ts
        │   └── ...
        └── ...
      </pre>

      <BaseSectionHeading>DataStax Node.js Driver Reference</BaseSectionHeading>

      <p>
        <NuxtLink
          to="
        https://docs.datastax.com/en/astra-serverless/docs/connect/drivers/connect-nodejs.html
        "
          class="text-purple-500"
          target="_blank">
          https://docs.datastax.com/en/astra-serverless/docs/connect/drivers/connect-nodejs.html
        </NuxtLink>
      </p>

      <p>
        <NuxtLink
          to="https://docs.datastax.com/en/developer/nodejs-driver/4.7/"
          class="text-purple-500"
          target="_blank">
          https://docs.datastax.com/en/developer/nodejs-driver/4.7/
        </NuxtLink>
      </p>

      <BaseSectionHeading class="my-8">Hosting Notes</BaseSectionHeading>

      <p><strong>Serverless</strong></p>

      <p>
        The server/api paths represent the local server-side API interface that
        is part of Nuxt 3. In a production deployment, these endpoints would
        migrate to a secure cloud-based solution such as AWS API Gateway or
        AppSync with Lambda functions to process the business logic with secret
        keys stored in AWS Secrets Manager or as environment variables
        server-side.
      </p>

      <p>
        This would allow for a hybrid rendering model on the frontend using
        Nuxt's Static Site Generator (SSG) with dynamic client-side
        functionality rendered within JavaScript-enabled components. This would
        maintain a serverless operating model and allow for a more secure and
        scalable solution.
      </p>

      <p><strong>Server-Based</strong></p>

      <p>
        Alternatively, the entire full-stack Nuxt application could run on a
        hosted server as is, along with any other similar full stack framework
        or metaframework.
      </p>

      <p><strong>Frameworks</strong></p>

      <p>
        Nuxt is but one of many frontend and full-stack frameworks that could be
        used to meet these functional requirements. React, Angular, Svelte,
        their metaframeworks and many other ecosystems offer similar functional
        features.
      </p>

      <p>
        The same goes for similar backend gateways and serverless funcitons
        between Google Cloud Platform and Microsoft Azure. In the end, this
        solution can be implemented with any number of frameworks and languages.
        The key is to use the right tool and cloud provider for the job.
      </p>
    </div>
    <p class="mt-8">--Ren&eacute;</p>
  </div>
</template>
