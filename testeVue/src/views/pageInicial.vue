<script setup>
import router from "@/router";

function changeHomePage() {
  router.push({ name: "telaAfterHome" });
}
</script>

<template>
  <div>
    <div class="principalDiv">
      <img src="../assets/logo.png" class="imageInicial"/>
      <button class="button" @click="changeHomePage()">start</button>
    </div>
  </div>
</template>

<style>
.principalDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, #43e97b, #38f9d7);
}
.imageInicial {
  width: 270px;
  height: 99px;
  margin-bottom: 32px;
}
button {
  background: #ff3d71;
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
