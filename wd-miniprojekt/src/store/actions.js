export default {
	async fetchDataGerman({ commit }) {
		const data = await fetch("/data/json/cda-paintings-v2.de.json");
		if (!data.ok) {
			console.error('Error fetching Data');
		} else {
			commit('fetchDataDeutsch', data);
		}
	},
	async fetchDataEnglish({ commit }) {
		const data = await fetch("/data/json/cda-paintings-v2.en.json");
		if (!data.ok) {
			console.error('Error fetching Data');
		} else {
			commit('fetchDataEnglish', data);
		}
	}
}