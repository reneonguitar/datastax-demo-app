<script setup lang="ts">
  defineEmits(['submit']);

  const query = ref('');
</script>

<template>
  <BasePageHeading>Movie Profile</BasePageHeading>
  <form @submit.prevent>
    <div class="space-y-12 sm:space-y-16">
      <p class="max-w-2xl text-sm leading-6 text-gray-600">
        Enter some criteria for movies by title and/or genre to see similar
        matches.
      </p>

      <div
        class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            for="movie-title"
            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
            Movie Title and/or Genre(s)
          </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <input
              v-model="query"
              type="text"
              name="movie-title"
              id="movie-title"
              autocomplete="movie-title"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              @keyup.enter="$emit('submit', query)" />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900 focus:ring-purple-600"
        @click="
          query = '';
          $emit('submit', '');
        ">
        Reset
      </button>
      <button
        type="button"
        class="inline-flex justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        @click="$emit('submit', query)">
        Get Recommended Movies
      </button>
    </div>
  </form>
</template>
