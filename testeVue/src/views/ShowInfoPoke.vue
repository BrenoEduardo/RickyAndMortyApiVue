<script setup>
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemonState";

const useStatePokemon = usePokemonStore();
const { infoPokemon } = storeToRefs(useStatePokemon);
// const store = useStore()
console.log(infoPokemon, "info pokemon");
</script>

<template>
  <div>
    <h1>Nome do pokemon: {{ infoPokemon.data.name }}</h1>
    <div>
      <div v-for="infoPokemon in infoPokemon.data.abilities">
        <div>{{ infoPokemon.ability.name }}</div>
        <img src={{infoPokemon.ability.url}} alt="">
      </div>
    </div>
  </div>
</template>
