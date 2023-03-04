<script setup>
import { ref } from "vue";
import { useStoreApi } from "../stores/state";
// import router from "@/router";

const valueWritten = ref("");
const useState = useStoreApi();
function searchInfo() {
  useState.count = 1;
  if (valueWritten.value) {
    useState.changeState(valueWritten.value.toLowerCase());
  } else {
    useState.loadingInfos("loadin");
  }
}
</script>
<template>
  <img src="../assets/logo.png" class="logo" />
  <div @keyup="searchInfo()" class="search">
    <input type="text" v-model="valueWritten" placeholder="Pesquisar" />
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
  outline: none;
  border: 2px solid transparent;
  text-align: center;
}
input:focus {
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0 0 2px 2px #000000;
}
.logo {
  width: 30%;
}
</style>
