<script setup>
  const model = defineModel();
  defineProps({
    label: String,
  })
</script>

<template>
  <label>{{  label }}</label>
  <input v-model="model">
</template>

<style scoped>

</style>