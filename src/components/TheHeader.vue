<script setup>
  import { ref } from 'vue';
  import BaseButton from './BaseButton.vue';
  const label = ref('dark');

  defineProps({
    title: {
      type: String,
    }
  });

  function toggleTheme() {
    label.value = label.value === 'dark' ? 'light' : 'dark';
  }
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <BaseButton @click="toggleTheme" :label="label" type="primary"/>
  </header>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>