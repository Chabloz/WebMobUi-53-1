<script setup>
  /*
    * props => passage de valeurs simples en lecture
    * v-model => passage de valeurs simples en lecture/écriture
    * slots => passage de contenu HTML (texte, éléments, composants) en lecture (y compris des composants)
    * attributs HTML=> passage de valeurs simples en lecture (ex: disabled, required, etc.)
    * ( Attention : nécessite une balise racine unique)
    */
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