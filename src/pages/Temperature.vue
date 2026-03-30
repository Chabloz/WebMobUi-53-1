<script setup>
  import { ref } from 'vue';
  import BaseInputTemperature from '../components/BaseInputTemperature.vue';

  const temperatureSi = ref(0); // Kelvin

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
</script>

<template>
  <div>Temp SI: {{  temperatureSi }}</div>
  <div>Temp Kelvin: {{  tempKelvin }}</div>
  <div>Temp °C: {{  tempCelcius }}</div>

  <BaseInputTemperature v-model="tempCelcius" label="°C"/>
  <BaseInputTemperature v-model="tempKelvin" label="K"/>
</template>

<style scoped>

</style>