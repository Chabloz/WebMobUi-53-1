<script setup>
  import { compile, computed } from 'vue';
import { useFetch } from '../composables/useFetch';

  const {data, error, loading} = useFetch('https://chabloz.eu/files/horaires/all'); // hard coder

  const filter = defineModel();

  const schedulFiltered = computed(() => {
    return data.value.map((c) => c.label.search(filter.value) != -1);
  })

  const scheduleSorted = computed(() => {
    if (!schedulFiltered.value) return [];
    const sorted = schedulFiltered.value.toSorted((c1, c2) => {
      return c1.start.localeCompare(c2.start);
    })
    return sorted;
  })

  // const {data, error, loading} = useFetch('https://example.com'); // hard coder
</script>

<template>
  <div>
    <h2>Horaires</h2>
    <div v-if="loading">
      Chargement en cours
    </div>
    <div v-if="data">
      <input v-model="filter" type="text">
      {{  filter  }}
      <div v-for="cours in schedulFiltered">
        {{  cours.label }}
        {{  cours.start }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>