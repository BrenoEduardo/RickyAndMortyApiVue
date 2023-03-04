import { defineStore } from "pinia";
import axios from "axios";

export const useStoreApi = defineStore("state", {
  state: () => {
    return {
      infoApi: [],
      showInfo: false,
      alertErro: false,
      infoCharacter: null,
      episodesInfo: [],
      infoPerso: null,
    };
  },
  actions: {
    async changeState(infoPerso) {
      this.infoPerso = infoPerso;
      try {
        await axios({
          url: `https://rickandmortyapi.com/api/character/?name=${infoPerso}`,
          method: "GET",
          data: {
            query: `
              {
                characters(page: 2, filter: { name: "rick" }) {
                  info {
                    count
                  }
                  results {
                    name
                  }
                }
                location(id: 1) {
                  id
                }
                episodesByIds(ids: [1, 2]) {
                  id
                }
              }
            `,
          },
        }).then((res) => {
          this.infoApi = [];
          res.data.results.forEach((item) => {
            this.infoApi.push(item);
          });
        });
      } catch (error) {
        this.alertErro = true;
      }
    },
    async loadingInfos(count, callback) {
      try {
        let url = `https://rickandmortyapi.com/api/character/?page=${count}`;
        if (this.infoPerso && count) {
          url = `${url}&name=${this.infoPerso}`;
        }

        console.log(count, " count");
        console.log(url, "infoperso");
        await axios({
          url: url,
          method: "GET",
          data: {
            query: `
              {
                characters(page: 2, filter: { name: "rick" }) {
                  info {
                    count
                  }
                  results {
                    name
                  }
                }
                location(id: 1) {
                  id
                }
                episodesByIds(ids: [1, 2]) {
                  id
                }
              }
            `,
          },
        }).then((res) => {
          this.infoPerso = "";
          res.data.results.forEach((item) => {
            this.infoApi.push(item);
          });
          if (callback && typeof callback == "function") {
            callback();
          }
        });
      } catch (error) {
        this.alertErro = true;
      }
    },
    async loadingInfosCharacter(id) {
      try {
        await axios({
          url: `https://rickandmortyapi.com/api/character/${id}`,
          method: "GET",
          data: {
            query: `
              {
                characters(page: 2, filter: { name: "rick" }) {
                  info {
                    count
                  }
                  results {
                    name
                  }
                }
                location(id: 1) {
                  id
                }
                episodesByIds(ids: [1, 2]) {
                  id
                }
              }
            `,
          },
        }).then((res) => {
          const eps = [];
          this.infoCharacter = res.data;
          this.infoCharacter.episode.map((ep) => {
            const numberEp = ep.replace(
              "https://rickandmortyapi.com/api/episode/",
              ""
            );
            eps.push(numberEp);
          });
          this.loadingEpisodes(eps);
          this.showInfo = true;
        });
      } catch (error) {
        this.alertErro = true;
      }
    },
    async loadingEpisodes(episodes) {
      try {
        await axios({
          url: `https://rickandmortyapi.com/api/episode/${episodes}`,
          method: "GET",
          data: {
            query: `
              {
                characters(page: 2, filter: { name: "rick" }) {
                  info {
                    count
                  }
                  results {
                    name
                  }
                }
                location(id: 1) {
                  id
                }
                episodesByIds(ids: [1, 2]) {
                  id
                }
              }
            `,
          },
        }).then((res) => {
          const resp = res.data;
          if (resp.episode) {
            this.episodesInfo.push(resp.episode);
          }
          resp.map((episod) => {
            this.episodesInfo.push(episod.episode);
          });
        });
      } catch (error) {
        this.alertErro = true;
      }
    },
  },
});
