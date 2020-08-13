import german from "../../json/cda-paintings-v2.de.json";
import english from "../../json/cda-paintings-v2.en.json";

export default {
  fetchDataGerman({ commit }) {
    const data = german.items;
    commit("fetchDataGerman", data);
  },
  fetchDataEnglish({ commit }) {
    const data = english.items;
    commit("fetchDataEnglish", data);
  }
};
