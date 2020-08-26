import german from "../../json/cda-paintings-v2.de.json";
import english from "../../json/cda-paintings-v2.en.json";

export default {
  setData({ commit }, lang) {
    if (lang === "English") {
      const data = english.items;
      commit("setData", { data, lang });
      commit("destructure", data);
    } else if (lang === "Deutsch") {
      const data = german.items;
      commit("setData", { data, lang });
      commit("destructure", data);
    } else {
      console.error("no language specified!");
    }
  },
  destructure({ commit }, data) {
    commit("destructure", data);
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
  },
  openLangModal({ commit }) {
    commit("openLangModal");
  },
  closeLangModal({ commit }) {
    commit("closeLangModal");
  },
  emptyFiltered({ commit }) {
    commit("emptyFiltered");
  }
};
