<template>
  <!-- Hero section -->
  <div class="lg:flex gap-x-8">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
      <p class="text-gray-500 text-sm">Ren&eacute; Ugarte, November 2023</p>
      <h1
        class="font-josefin mt-4 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        CineMatch<span class="font-thin">&trade;</span> Demo
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Showcasing Astra DB with vector embeddings for a similarity movie search
        relative to a movie title and/or genre query. Built for for Some Stream,
        Inc.
      </p>
      <div class="mt-10 flex items-center gap-x-6">
        <NuxtLink
          to="/cinematch"
          class="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >Let's Go <span aria-hidden="true">→</span></NuxtLink
        >
      </div>
    </div>
    <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
      <img src="~/assets/cinematch/some-stream.png" alt="Some Stream Service" />
    </div>
  </div>
</template>
