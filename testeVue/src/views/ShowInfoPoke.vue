<script setup>
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemonState";
import { computed } from "vue";
import router from "@/router";

const useStatePokemon = usePokemonStore();
const { infoPokemon } = storeToRefs(useStatePokemon);
const namePokemon = computed(() => {
  return infoPokemon.value?.data?.name;
});
const abilitiesPokemon = computed(() => {
  return infoPokemon.value?.data?.abilities;
});
function backHome() {
  useStatePokemon.$reset();
  router.push({ name: "home" });
}
// const store = useStore()
console.log(infoPokemon, "info pokemon");
</script>

<template>
  <div>
    <h1>Nome do pokemon: {{ namePokemon }}</h1>
    <div>
      <div v-for="(pokemon, index) in abilitiesPokemon" :key="index">
        <div>{{ pokemon.ability.name }}</div>
        <img src="{{pokemon.ability.url}}" alt="" />
      </div>
    </div>
    <button @click="backHome()">Voltar</button>
  </div>
</template>
