<script setup>
import { storeToRefs } from "pinia";
import showCharacterInfo from "./showCharacterInfo.vue";
import { useStoreApi } from "../stores/state";
import { ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";
import "animate.css";

const useStateApi = useStoreApi();
const { infoApi } = storeToRefs(useStateApi);
const { showInfo } = storeToRefs(useStateApi);
// const infos = infoApi.value?.results;
const showInfos = ref(false);
onMounted(() => {
  useStateApi.loadingInfos("1");
  showItem(400);
});
const infos = computed(() => {
  return infoApi.value;
});
// let count = 1;
function openInfoCharacter(event) {
  useStateApi.loadingInfosCharacter(event.id);

  if (showInfo) {
    showInfos.value = showInfo;
  }
}
function verMais() {
  let count = useStateApi.count += 1
  useStateApi.loadingInfos(count, function () {
    showItem(200);
  });
}
function showItem(fnTimeOut) {
  setTimeout(() => {
    var timeout = 200;
    document.querySelectorAll(".itens").forEach((item) => {
      if (item.style.display != "flex") {
        setTimeout(() => {
          item.style.display = "flex";
        }, timeout);
        timeout += 150;
      }
    });
  }, fnTimeOut);
}
setTimeout(() => {
  document.querySelectorAll(".backGround")[0].onscroll = (event) => {
    if (
      event.target.scrollTop ==
      event.target.scrollHeight - window.innerHeight
    ) {
      verMais();
    }
  };
}, 10);
</script>

<template>
  <section>
    <div class="divPrincipal">
      <div
        class="itens animate__animated animate__zoomIn"
        v-for="(infos, index) in infos"
        :key="index"
        @click="openInfoCharacter(infos)"
      >
        <div class="divImage">
          <img :src="infos.image" alt="" class="image" />
        </div>
        <div class="name">
          <h1 class="infoName">{{ infos.name }}</h1>
          <div>
            <button class="detalhes">Detalhes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showInfo"
      v-bind:class="{ openModal: showInfo, viewCardNone: !showInfo }"
      class="infoApi"
    >
      <div class="card">
        <showCharacterInfo />
      </div>
    </div>
  </section>
</template>

<style>
.divPrincipal {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  padding: 10px;
  margin: 10px;
}
@media (max-width: 835px) {
  .divPrincipal {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 555px) {
  .divPrincipal {
    grid-template-columns: 1fr;
  }
}
.detalhes {
  cursor: pointer;
  border-radius: 10px;
  border: none;
  padding: 7px;
  background-color: #a9a9a9;
  border: 1px solid black;
  padding: 7px;
  border: 1px solid black;
  transition: 0.3s;
}
.detalhes:hover {
  scale: 1.1;
  box-shadow: 0px 0px 10px 5px #00ced1;
}
.verMais {
  text-align: center;
  cursor: pointer;
}
.viewCardNone {
  display: none;
  opacity: 0.9;
}

.openModal {
  display: block;
}
.itens {
  display: flex;
  gap: 1rem;
  background-color: #454545;
  border-radius: 20px;
  padding: 8px 0;
  box-shadow: 0 2px 12px 2px #656565de;
  height: 100%;
  flex-direction: row-reverse;
  cursor: pointer;
  align-items: center;
  transition: 0.3s;
  color: white;
}
.itens:hover {
  scale: 1.1;
}
.image {
  border-radius: 50%;
  height: 100px;
}

.infoApi {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.name {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.card {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
