<script setup>
  import { ref } from 'vue';
  import BaseInputTemperature from '../components/BaseInputTemperature.vue';

  const temperatureSi = ref(0); // Kelvin

  const tempKelvin = defineModel('kelvin', {
    get: () => Number(temperatureSi.value.toFixed(2)),
    set: (val) => temperatureSi.value = Number(val),
  });

  const tempCelcius = defineModel('celcius', {
    get: () => Number((temperatureSi.value - 273.15).toFixed(2)),
    set: (val) => temperatureSi.value = Number(val) + 273.15,
  });

  const tempFahrenheit = defineModel('fahrenheit', {
    get: () => Number((temperatureSi.value - 273.15).toFixed(2)),
    set: (val) => temperatureSi.value = Number(val) + 273.15,
  });


</script>

<template>
  <div>
    <BaseInputTemperature v-model="tempKelvin" label="K"/>
    <BaseInputTemperature v-model="tempCelcius" label="°C"/>
    <BaseInputTemperature v-model="tempFahrenheit" label="°F"/>
  </div>
</template>

<style scoped>

</style>