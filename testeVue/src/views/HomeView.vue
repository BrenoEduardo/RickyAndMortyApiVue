<script setup>
import { ref } from "vue";
import CardPokemon from "../components/CardPokemon.vue";

const viewCard = ref(false);
function showCard() {
  this.viewCard = !this.viewCard;
}
</script>

<template>
  <main class="backGround">
    <img src="../assets/personagem.png" alt="" v-on:click="showCard()" />
    <div v-bind:class="{ openModal: viewCard, viewCardNone: !viewCard }">
      <CardPokemon />
    </div>
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
</style>
