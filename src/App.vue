<script setup>
  import TheHeader from './components/TheHeader.vue';
  import Home from './pages/Home.vue';
  import Temperature from './pages/Temperature.vue';
  import { useHashRoute } from './composables/useHashRoute';

  const routes = [
    { hash: '#temperature', component: Temperature},
    { hash: '#home', component: Home},
  ];
  const { currentComponent } = useHashRoute(routes);
</script>

<template>
  <TheHeader>
    I<span>M</span> WebMobUi
  </TheHeader>
  <main>
    <component :is="currentComponent" />
  </main>
</template>

<style>
:root {
    --color-primary: #6f42c1;
    --color-secondary: #0d6efd;
    --color-success: #198754;
    --color-danger: #dc3545;
    --color-warning: #ffc107;
    --color-info: #0dcaf0;
    --color-bg: #fff;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-bg);
  }
  main {
    padding: 1rem;
  }
</style>