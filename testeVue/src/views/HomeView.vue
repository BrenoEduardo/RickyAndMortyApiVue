<script setup>
import CardPokemon from "../components/CardPokemon.vue";
import ShowInfoPoke from "./ShowInfoPoke.vue";
import { storeToRefs } from "pinia";
import { useStoreApi } from "../stores/pokemonState";

const useStateApi = useStoreApi();
const { infoApi } = storeToRefs(useStateApi);

var a = infoApi.value?.results

</script>

<template>
  <main class="backGround">
    <div class="search">
      <CardPokemon />
    </div>
    <div class="">
      <ShowInfoPoke />
    </div>
  </main>
</template>

<style>
.search {
  display: flex;
}

.backGround {
  background-image: linear-gradient(to right, #368C40, yellow);
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
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
