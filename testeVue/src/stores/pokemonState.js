import { defineStore } from "pinia";
import axios from "axios";

export const useStoreApi = defineStore("pokemonState", {
  state: () => {
    return {
      infoApi: null,
      showInfo: false,
      alertErro: false,
      infoCharacter: null,
    };
  },
  actions: {
    async saveState(infoPokemon) {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${infoPokemon}`)
          .then((res) => {
            this.infoPokemon = res;
            this.showInfo = true;
          });
      } catch (error) {
        this.alertErro = true;
      }
    },
    async loadingInfos() {
      try {
        await axios
          .get(`https://rickandmortyapi.com/api/character`)
          .then((res) => {
            this.infoApi = res.data;
          });
      } catch (error) {
        this.alertErro = true;
      }
    },
    async loadingInfosCharacter(id) {
      try {
        await axios
          .get(`https://rickandmortyapi.com/api/character/${id}`)
          .then((res) => {
            this.infoCharacter = res.data;
            this.showInfo = true;
            console.log(this.infoCharacter, 'infocajkads')
          });
      } catch (error) {
        this.alertErro = true;
      }
    }
  },
});

