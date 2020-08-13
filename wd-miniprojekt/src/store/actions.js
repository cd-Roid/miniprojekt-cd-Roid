import german from "../../json/cda-paintings-v2.de.json";
import english from "../../json/cda-paintings-v2.en.json";

export default {
  groupByYear({ commit }, lang) {
    if (lang === "en") {
      const data = english.items;
      commit("group", data);
    } else if (lang === "de") {
      const data = german.items;
      commit("group", data);
    } else {
      console.error("no language specified!");
    }
  }
};
