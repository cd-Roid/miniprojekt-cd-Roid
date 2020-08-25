import german from "../../json/cda-paintings-v2.de.json";
import english from "../../json/cda-paintings-v2.en.json";

export default {
  setData({ commit }, lang) {
    if (lang === "en") {
      const data = english.items;
      commit("setData", data);
    } else if (lang === "de") {
      const data = german.items;
      commit("setData", data);
    } else {
      console.error("no language specified!");
    }
  },
  destructure({ commit }) {
    commit("destructure");
  },
  removeImg({ commit }) {
    commit("removeImg");
    commit("destructure");
  },
  openModal({ commit }, article) {
    commit("openModal", article);
  },
  closeModal({ commit }, article) {
    commit("closeModal", article);
  }
};
