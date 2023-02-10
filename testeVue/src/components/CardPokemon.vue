<template>
  <div>
    <input type="text" v-model="valueWritten" />
    <button @click="searchPokemon()">Pesquisar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePokemonStore } from "../stores/pokemonState";
// import router from "@/router";

const valueWritten = ref("");
const usePokemonState = usePokemonStore();
function searchPokemon() {
  usePokemonState.saveState(valueWritten.value);
//   router.push({ name: "showInfoPoke" });
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
}
</style>
