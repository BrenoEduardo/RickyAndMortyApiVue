<script setup>
import router from "@/router";
import { onMounted } from "vue";
import { useStoreApi } from "../stores/state";

const useState = useStoreApi();
function changeHomePage() {
  router.push({ name: "telaAfterHome" });
}
onMounted(() => {
  useState.loadingInfos('1');
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

.button {
  padding: 16px 24px;
  width: 150px;
  color: #fff;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
  background-color: #4c4929;
  background-image: linear-gradient(to right, #4b6a21, #a1994c);
  box-shadow: 0px 0px 11px 0px #f0e14a;
}
.button:hover {
  box-shadow: 0px 0px 11px 20px #f0e14a;
}
</style>
