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
const imagePokemon = computed(() => {
  return infoPokemon.value?.data?.sprites;
});
const statusPokemon = computed(() => {
  return infoPokemon.value?.data?.stats;
});
const typePokemon = computed(() => {
  return infoPokemon.value?.data?.types;
});
function backHome() {
  useStatePokemon.$reset();
  router.push({ name: "telaAfterHome" });
}
// const store = useStore()
</script>

<template>
  <div class="divPrincipal">
    <div class="itens">
      <div class="divImage">
        <img :src="imagePokemon.front_default" alt="" class="image" />
      </div>
      <h1>{{ namePokemon }}</h1>
      <div class="allInfos">
        <div class="tipoPokemon">
          <h3>Tipo</h3>
          <div class="typeInfos">
            <div v-for="(typePokemon, index) in typePokemon" :key="index">
              {{ typePokemon.type.name }}
            </div>
          </div>
        </div>
        <div class="habilityPokemon">
          <h3>Habilidades</h3>
          <div class="typeInfos">
            <div v-for="(pokemon, index) in abilitiesPokemon" :key="index">
              <div>{{ pokemon.ability.name }}</div>
              <!-- <img src="{{pokemon.ability.url}}" alt="" /> -->
            </div>
          </div>
        </div>
        <div class="statusPokemon">
          <h3>Status</h3>
          <div v-for="(statusPok, index) in statusPokemon" :key="index">
            <div>{{ statusPok.stat.name }} : {{ statusPok.base_stat }}</div>
          </div>
        </div>
      </div>
      <button @click="backHome()">Voltar</button>
    </div>
  </div>
</template>

<style>
.divPrincipal {
  background-image: linear-gradient(to right, #43e97b, #38f9d7);
  height: 74vh;
  width: 100vw;
  max-width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Open Sans", sans-serif;
  overflow-y: scroll;
  z-index: 8000;
  border-radius: 8px;
  box-sizing: border-box;
}
.tipoPokemon {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
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
  padding: 113px 24px 0;
  box-sizing: border-box;
  padding-bottom: 33px;
}
.divImage {
  border-radius: 50%;
  border: 4px solid #00d68f;
  background-color: #f7f9fc;
  position: absolute;
  overflow: hidden;
  top: -74px;
}
.image {
  width: 160px;
}
.allInfos {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 35px;
}
.typeInfos {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  max-width: 350px;
}
.habilityPokemon {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
}
.statusPokemon {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
}
</style>
