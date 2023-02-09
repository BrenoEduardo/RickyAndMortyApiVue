import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const usePokemonStore = defineStore("pokemonState", {
  state: () => {
    return {
      infoPokemon: null,
    };
  },
  actions: {
    async saveState(infoPokemon) {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${infoPokemon}`)
          .then((res) => {
            this.infoPokemon = res;
            router.push({ name: "showInfoPoke" });
          });
      } catch (error) {
        alert("deu erro");
        console.log(error);
      }
    },
  },
});

