<script setup>
import router from "@/router";
import { onMounted } from "vue";
import { useStoreApi } from "../stores/pokemonState";

const usePokemonState = useStoreApi();
function changeHomePage() {
  router.push({ name: "telaAfterHome" });
  usePokemonState.loadingInfos();
}
onMounted(() => {
  usePokemonState.loadingInfos();
});
</script>

<template>
  <div>
    <div class="principalDiv">
      <button class="button" @click="changeHomePage()">start</button>
    </div>
  </div>
</template>

<style>
.principalDiv {
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
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/background.jpg);
}

.imageInicial {
  width: 270px;
  height: 99px;
  margin-bottom: 32px;
}

button {
  background-image: linear-gradient(to right, #22693a, #779a0f);
  box-shadow: 2px 2px 2px yellow;
  padding: 16px 24px;
  width: 150px;
  color: #fff;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
}
</style>
