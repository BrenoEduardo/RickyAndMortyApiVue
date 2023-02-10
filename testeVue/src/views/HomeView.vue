<script setup>
import { ref } from "vue";
import CardPokemon from "../components/CardPokemon.vue";
import ShowInfoPoke from "./ShowInfoPoke.vue";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemonState";

const viewCard = ref(false);
function showCard() {
  this.viewCard = !this.viewCard;
}
const showInfos = ref(false);

const useStatePokemon = usePokemonStore();
const { showInfo } = storeToRefs(useStatePokemon);
if (showInfo) {
  showInfos.value = showInfo;
}
const { alertErro } = storeToRefs(useStatePokemon);
const alertErros = ref(false);
if (alertErro) {
  alertErro.value = alertErros;
}
</script>

<template>
  <main class="backGround">
    <div v-on:click="showCard()" class="cursor">
      <img src="../assets/searchTooltip.png" alt="" />
      <img src="../assets/personagem.png" alt="" />
    </div>
    <div v-bind:class="{ openModal: viewCard, viewCardNone: !viewCard }">
      <CardPokemon />
    </div>
    <div
      v-if="showInfo"
      v-bind:class="{ openModal: showInfo, viewCardNone: !showInfo }"
      class="infoPokemon"
    >
      <ShowInfoPoke />
    </div>
    <p v-if="alertErros" class="erro">
      Pokemon não encontrado, por favor verifique o nome e tente novamente
    </p>
  </main>
</template>

<style>
.backGround {
  background-image: url(../assets/pageBackground.png);
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.viewCardNone {
  display: none;
  opacity: 0.9;
}
.openModal {
  display: block;
}
.cursor {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.erro {
  width: 167px;
  color: white;
}
</style>
