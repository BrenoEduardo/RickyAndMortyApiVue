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
</script>

<template>
  <div class="divPrincipal">
    <div class="itens">
      <div class="divImage">
        <img src="" alt="" class="image" />
      </div>
      <h1>Nome do pokemon: {{ namePokemon }}</h1>
      <div>
        <div v-for="(pokemon, index) in abilitiesPokemon" :key="index">
          <div>{{ pokemon.ability.name }}</div>
          <img src="{{pokemon.ability.url}}" alt="" />
        </div>
      </div>
      <button @click="backHome()">Voltar</button>
    </div>
  </div>
</template>

<style>
.divPrincipal {
  background-image: linear-gradient(to right, #43e97b, #38f9d7);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  font-family: "Open Sans", sans-serif;
  overflow-y: scroll;
  z-index: 8000;
  border-radius: 8px;
  box-sizing: border-box;
}
.itens {
  width: 100%;
  background-color: #f7f9fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 153px;
  border-radius: 24px 24px 0px 0px;
  border: none;
  padding-top: 170px;
  padding: 170px 24px 0;
  box-sizing: border-box;
  padding-bottom: 140px;
}
.divImage {
  border-radius: 50%;
  border: 4px solid #00d68f;
  background-color: #f7f9fc;
  position: absolute;
  overflow: hidden;
}
.image {
  height: 247px;
  width: 247px;
}
</style>
