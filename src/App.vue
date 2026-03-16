<script setup>
  import { ref, watch } from 'vue';
  import TheHeader from './components/TheHeader.vue';

  const username = defineModel('username');

  setTimeout(() => {
    username.value = 'new username';
  }, 5000);

  watch(username, (newValue) => {
     if (newValue === 'admin') {
        username.value = '';
     }
  });

  // const age = ref(0);
  // age.value += 2;
  // console.log(age.value);
  // setTimeout(() => {
  //   age.value += 2;
  //   console.log(age.value);
  // }, 6000);
</script>

<template>
  <h1>main title</h1>
  <TheHeader />

  <div>
    <input v-model="username" type="email">
    {{  username }}
  </div>
  <!-- <the-place>the place</the-place> -->
  <!-- <div>{{ age }}</div> -->
</template>

<style>

</style>