import german from "../../json/cda-paintings-v2.de.json";
import english from "../../json/cda-paintings-v2.en.json";

export default {
  setData({ commit }, lang) {
    if (lang === "English") {
      const data = english.items;
      const langList = [{ id: 1, lang: "Deutsch" }];
      commit("mutateData", { data, lang });
      commit("destructure", data);
      commit("setLangList", langList);
    } else if (lang === "Deutsch") {
      const data = german.items;
      const langList = [{ id: 1, lang: "English" }];
      commit("mutateData", { data, lang });
      commit("destructure", data);
      commit("setLangList", langList);
    } else {
      console.error("no language specified!");
    }
  },
  destructure({ commit }, data) {
    commit("destructure", data);
  },
  openModal({ commit }, article) {
    commit("openModal", article);
  },
  closeModal({ commit }, article) {
    commit("closeModal", article);
  },
  emptyFiltered({ commit }) {
    commit("emptyFiltered");
  },
  previousArticle({ commit }) {
    commit("previous");
  },
  nextArticle({ commit }) {
    commit("next");
  },
  likeArticle({ commit }) {
    commit("addToLiked");
  },
  collapseAll({ commit }) {
    commit("collapse");
  }
};
