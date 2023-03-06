<script setup>
import { storeToRefs } from "pinia";
import { useStoreApi } from "../stores/state";
import router from "@/router";
import { computed } from "vue";
import "animate.css";

const useStateApi = useStoreApi();
const { infoCharacter } = storeToRefs(useStateApi);
const { episodesInfo } = storeToRefs(useStateApi);

var infos = infoCharacter.value;

const episodesInfoarray = computed(() => {
  return episodesInfo.value;
});
function backHome() {
  useStateApi.showInfo = false;
  useStateApi.infoCharacter = null;
  useStateApi.episodesInfo = [];
  router.push({ name: "telaAfterHome" });
}
</script>

<template>
  <div class="divPrincipalCard">
    <div style="text-align: center">
      <img :src="infos.image" class="imageInfo" />
    </div>
    <div>
      <h1>{{ infos.name }}</h1>
    </div>
    <div class="infosPerso">
      <h2 class="infoPessoal">
        Status <span>{{ infos.status }}</span>
      </h2>
      <h2 class="infoPessoal">
        Espécie <span>{{ infos.species }}</span>
      </h2>
      <h2 class="infoPessoal">
        Gênero <span>{{ infos.gender }}</span>
      </h2>
    </div>
    <div class="containerEps">
      <h2>Episódios aparecido</h2>
      <div class="conteudo">
        <div
          v-for="(episodesInfoarray, index) in episodesInfoarray"
          :key="index"
        >
          <div>
            <span>EP: {{ episodesInfoarray }}</span>
          </div>
        </div>
      </div>
    </div>
    <button @click="backHome()" class="buttonVolt">Voltar</button>
  </div>
</template>

<style>
.divPrincipalCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #5a1f19;
  width: 500px;
  max-height: 700px;
  border-radius: 20px;
  padding: 30px 0;
  box-shadow: 0px 0px 25px 0px #f0e14a;
}
@media (max-width: 650px) {
  .divPrincipalCard {
    scale: 0.7;
  }
}
.imageInfo {
  border-radius: 50%;
  padding-bottom: 20px;
  width: 60%;
}
.infosPerso {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.infoPessoal {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid: 1rem;
}
span {
  padding: 8px;
  font-size: 13px;
}
.conteudo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  max-height: 117px;
  min-height: 2em;
  grid: 3rem;
  overflow-y: auto;
}
.conteudo::-webkit-scrollbar-track {
  background-color: #dcdcdc;
}
.conteudo::-webkit-scrollbar {
  width: 6px;
  background: #343131;
}
.conteudo::-webkit-scrollbar-thumb {
  background: #343131;
}
.containerEps {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}
.buttonVolt {
  padding: 16px 24px;
  width: 150px;
  color: #fff;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 15px 0;
  background-color: #f0e14a;
  background-image: linear-gradient(to right, #97ce4c, #f0e14a);
  box-shadow: 0px 0px 11px 0px #f0e14a;
}
.buttonVolt:hover {
  box-shadow: 0px 0px 40px 15px #f0e24ad3;
}
</style>
