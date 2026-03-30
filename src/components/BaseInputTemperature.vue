<script setup>
  const model = defineModel();
  defineProps({
    label: String,
  })
</script>

<template>
  <label>{{  label }}</label>
  <input v-model="model" type="number">
</template>

<style scoped>

</style>