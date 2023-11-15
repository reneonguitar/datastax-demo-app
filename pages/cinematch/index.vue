<script setup lang="ts">
  const query = ref('');

  function handleQuery(submittedQuery: string) {
    query.value = submittedQuery;
  }
</script>

<template>
  <div class="w-full flex flex-col md:flex-row mx-auto">
    <div class="w-full md:w-1/2 md:mr-8 mb-16 md:mb-0">
      <CineMatchQuery @submit="handleQuery" />
    </div>
    <div class="w-full md:w-1/2 md:ml-8">
      <CineMatchResults :query="query" />
    </div>
  </div>
</template>
