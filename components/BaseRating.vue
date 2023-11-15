<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/20/solid';
</script>

<template>
  <StarIcon
    v-for="rating in [0, 1, 2, 3, 4]"
    :key="rating"
    :class="[
      4 > rating ? 'text-yellow-400' : 'text-gray-200',
      'h-5 w-5 flex-shrink-0',
    ]"
    aria-hidden="true" />
</template>
