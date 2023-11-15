<script setup lang="ts">
  defineProps<{
    movie: any;
  }>();
</script>
<template>
  <div
    class="divide-y divide-gray-200 overflow-hidden rounded-lg border bg-white my-8">
    <div class="px-4 py-5 sm:px-6">
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
      <BaseSectionHeading>
        {{ movie.title ? movie.title : 'Movie Title' }}
        <template #actions><BaseRating /></template>
      </BaseSectionHeading>
    </div>
    <div class="px-4 py-5 sm:p-6 flex flex-col md:flex-row md:space-x-4">
      <img src="https://placehold.co/100x148" class="rounded-lg md:w-1/3" />
      <div class="md:w-1/3">
        <BaseSectionHeading>
          Genres
          <div
            v-for="(genre, index) in movie.genres.split('|')"
            :key="index"
            class="rounded-full bg-purple-50 px-2 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 my-4">
            {{ genre }}
          </div>
        </BaseSectionHeading>
      </div>
      <div class="md:w-1/3">
        <BaseSectionHeading>
          Tags
          <div
            class="rounded-full bg-pink-50 px-2 py-1 text-sm font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 my-4">
            Some Tag
          </div>
        </BaseSectionHeading>
      </div>
    </div>
  </div>
</template>
