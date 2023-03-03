<script setup>
import { ref } from "vue";
import { useStoreApi } from "../stores/pokemonState";
// import router from "@/router";

const valueWritten = ref("");
const usePokemonState = useStoreApi();
function searchPokemon() {
  if (valueWritten.value) {
    usePokemonState.saveState(valueWritten.value.toLowerCase());
  }
}
</script>
<template>
  <div @keyup.enter="searchPokemon()" class="search">
    <input type="text" v-model="valueWritten" />
    <!-- <button @click="searchPokemon()">Pesquisar</button> -->
  </div>
</template>

<style scoped>
div {
  display: flex;
}
input {
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  height: 4.5vh;
  width: 50vw;
  font-family: monospace;
}
</style>
