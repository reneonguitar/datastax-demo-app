<script setup lang="ts">
  const props = defineProps<{
    query: string;
  }>();

  const embedding: any = ref(null);
  const movieRecommendations: any = ref(null);
  const isLoading = ref(false);

  async function fetchEmbedding() {
    isLoading.value = true;
    embedding.value = null;

    if (!props.query) {
      movieRecommendations.value = null;
      isLoading.value = false;
      return;
    }

    const { data, error } = await useFetch('/api/openai/embedding', {
      method: 'POST',
      body: { query: props.query },
    });

    embedding.value = data.value;
    await queryDatabase();
    isLoading.value = false;
  }

  async function queryDatabase() {
    isLoading.value = true;
    movieRecommendations.value = null;
    if (!embedding.value) return;

    const { data, error } = await useFetch(
      '/api/datastax/astradb/vector-search',
      {
        method: 'POST',
        body: { query: embedding.value },
      }
    );
    console.log(data.value?.rows);
    movieRecommendations.value = data.value?.rows;
    isLoading.value = false;
  }

  watch(() => props.query, fetchEmbedding, { immediate: true });
</script>

<template>
  <div>
    <BasePageHeading>
      CineMatch<span class="font-thin">&trade;</span> Movies
    </BasePageHeading>
    <p class="max-w-2xl text-sm leading-6 text-gray-600">Top 10 shown.</p>

    <BaseSectionHeading v-if="props.query" class="mt-8">
      Results for "{{ props.query }}"
    </BaseSectionHeading>

    <div v-if="isLoading" class="mt-8 animate-pulse">Loading...</div>

    <CineMatchMovieCard
      v-for="(movie, index) in movieRecommendations"
      :key="index"
      :movie="movie" />
  </div>
</template>
