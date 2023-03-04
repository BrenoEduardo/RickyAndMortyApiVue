<script setup>
import CardInfo from "../components/buscaApi.vue";
import ShowInfo from "./ShowInfo.vue";
</script>

<template>
  <main class="backGround">
    <div class="search">
      <CardInfo />
    </div>
    <div class="">
      <ShowInfo />
    </div>
  </main>
</template>

<style>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.backGround {
  background: linear-gradient(to bottom right, #000000, #a5a56d);
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
  overflow-y: scroll;
}
.backGround::-webkit-scrollbar-track {
  background-color: #000b;
}
.backGround::-webkit-scrollbar {
  width: 6px;
  background: #000b;
}
.backGround::-webkit-scrollbar-thumb {
  background: #ffffff;
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
