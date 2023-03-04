<script setup>
import { ref } from "vue";
import { useStoreApi } from "../stores/state";
// import router from "@/router";

const valueWritten = ref("");
const useState = useStoreApi();
function searchInfo() {
  console.log('enttre aqui')
  if (valueWritten.value) {
    useState.changeState(valueWritten.value.toLowerCase());
  } else {
    useState.loadingInfos('1');
  }
}
</script>
<template>
  <img src="../assets/logo.png" class="logo" />
  <div @keyup="searchInfo()" class="search">
    <input type="text" v-model="valueWritten" />
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
}
input:focus {
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0 0 2px 2px #000000;
}
.logo {
  width: 30%;
}
</style>
