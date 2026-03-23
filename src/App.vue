<script setup>
  import { computed, ref, watch } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import BaseInputTemperature from './components/BaseInputTemperature.vue';

  const temperatureSi = ref(0); // Kelvin

  // setTimeout(() => {
  //   temperatureSi.value = 200.876237864;
  // }, 5000)

  // const tempKelvin = computed(() => {
  //   return temperatureSi.value.toFixed(2);
  // });

  const tempKelvin = defineModel('kelvin', {
    get: () => {
      return  Number(temperatureSi.value.toFixed(2));
    },
    set: (val) => {
      temperatureSi.value = Number(val);
    }
  });

  const tempCelcius = defineModel('celcius', {
    get: () => {
      return Number((temperatureSi.value - 273.15).toFixed(2));
    },
    set: (val) => {
      temperatureSi.value = Number(val) + 273.15;
    }
  });

  // setTimeout(() => {
  //   tempCelcius.value = 300;
  // }, 7000)

  tempKelvin.value = 10;
  // seulement cette deuxième affectation sera prise en compte pour la réactivité (à la fin du tick actuel)
  tempKelvin.value = 20;





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
  <div>Temp SI: {{  temperatureSi }}</div>
  <div>Temp Kelvin: {{  tempKelvin }}</div>
  <div>Temp °C: {{  tempCelcius }}</div>

  <BaseInputTemperature v-model="tempCelcius" label="°C"/>
  <BaseInputTemperature v-model="tempKelvin" label="K"/>
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