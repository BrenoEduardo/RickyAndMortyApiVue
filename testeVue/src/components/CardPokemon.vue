
<script setup>
import { ref } from "vue";
import { usePokemonStore } from "../stores/pokemonState";
// import router from "@/router";

const valueWritten = ref("");
const usePokemonState = usePokemonStore();
function searchPokemon() {
  if (valueWritten.value) {
    usePokemonState.saveState(valueWritten.value);
  }
}
</script>
<template>
  <div @keyup.enter="searchPokemon()">
    <input type="text" v-model="valueWritten" />
    <button @click="searchPokemon()">Pesquisar</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  height: 2.5vh;
  font-family: monospace;
}
</style>
