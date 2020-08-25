export default {
  setData(state, data) {
    state.data = data;
  },
  destructure(state, data) {
    data = state.data;
    const destructured = [];
    data.forEach(element => {
      let prop = {
        dating: element.dating.begin,
        images: element.images,
        inventoryNumber: element.inventoryNumber,
        objectId: element.objectId,
        title: element.titles[0].title,
        repository: element.repository,
        description: element.description
      };
      destructured.push(prop);
      if (state.years.includes(prop.dating) === false) {
        state.years.push(prop.dating);
        state.years.sort();
      }
    });
    state.data = destructured;
    let filtered = [];
    state.years.forEach(element => {
      filtered = state.data.filter(items => items.dating == element);
      state.filtered.push(filtered);
    });
  },
  removeImg(state, index) {
    state.data = state.data.splice(index, 1);
  },
  openModal(state, article) {
    state.modalOpen = true;
    state.viewedArticle = article;
  },
  closeModal(state, article) {
    state.modalOpen = false;
    state.viewedArticle = article;
  }
};
