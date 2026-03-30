<script setup>
  import TheHeader from './components/TheHeader.vue';
  import Home from './pages/Home.vue';
  import Temperature from './pages/Temperature.vue';
  import { useHashRoute } from './composables/useHashRoute';

  const { currentPage } = useHashRoute();
  console.log(currentPage.value);




  // setTimeout(() => {
  //   tempCelcius.value = 300;
  // }, 7000)

  // tempKelvin.value = 10;
  // seulement cette deuxième affectation sera prise en compte pour la réactivité (à la fin du tick actuel)
  // tempKelvin.value = 20;

  // const username = defineModel('username');

  // setTimeout(() => {
  //   username.value = 'new username';
  // }, 5000);

  // watch(username, (newValue) => {
  //    if (newValue === 'admin') {
  //       username.value = '';
  //    }
  // });

  // const age = ref(0);
  // age.value += 2;
  // console.log(age.value);
  // setTimeout(() => {
  //   age.value += 2;
  //   console.log(age.value);
  // }, 6000);

</script>

<template>
  <TheHeader title="IM WebMobUi"/>
  <Home v-if="currentPage === 'home'"/>
  <Temperature v-if="currentPage === 'temperature'"/>


  <!-- <BaseInputTemperature v-model="tempFarenheit" label="°F"/> -->

  <!-- <div>
    <input v-model="username" type="email">
    {{  username }}
  </div> -->
  <!-- <the-place>the place</the-place> -->
  <!-- <div>{{ age }}</div> -->
</template>

<style>

</style>