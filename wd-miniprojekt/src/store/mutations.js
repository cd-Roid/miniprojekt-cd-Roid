export default {
  mutateData(state, { data, lang }) {
    state.data = data;
    state.selectedLang = lang;
  },
  setLangList(state, langList) {
    state.language = langList;
  },
  destructure(state, data) {
    data = state.data;
    const destructured = [];
    data.forEach(element => {
      let prop = {
        dating: element.dating.begin,
        images: element.images,
        dimensions: element.structuredDimension,
        inventoryNumber: element.inventoryNumber,
        objectId: element.objectId,
        title: element.titles[0].title,
        repository: element.repository,
        location: element.locations[0].term,
        description: element.description
      };
      if (prop.images != null) {
        destructured.push(prop);
        if (state.years.includes(prop.dating) === false) {
          state.years.push(prop.dating);
        }
      }
    });
    state.years.sort();
    state.data = destructured;
    let filtered = [];
    state.years.forEach(element => {
      filtered = state.data.filter(items => items.dating == element);
      state.filtered.push(filtered);
    });
  },
  previous(state) {
    const viewed = state.viewedArticle;
    const findArticle = state.data.find(
      item => item.objectId == viewed.objectId
    );
    let number = state.data.indexOf(findArticle);
    if (number == 0) {
      state.modalOpen = true;
      number = state.data.length - 1;
      state.viewedArticle = state.data[number];
    } else {
      state.modalOpen = true;
      state.viewedArticle = state.data[number - 1];
    }
  },
  next(state) {
    const viewed = state.viewedArticle;
    const findArticle = state.data.find(
      item => item.objectId == viewed.objectId
    );
    let number = state.data.indexOf(findArticle);
    if (number == state.data.length - 1) {
      state.modalOpen = true;
      number = 0;
      state.viewedArticle = state.data[number];
    } else {
      state.modalOpen = true;
      state.viewedArticle = state.data[number + 1];
    }
  },
  addToLiked(state) {
    state.liked.push(state.viewedArticle);
  },
  openModal(state, article) {
    state.modalOpen = true;
    state.viewedArticle = article;
  },
  closeModal(state, article) {
    state.modalOpen = false;
    state.viewedArticle = article;
  },
  emptyFiltered(state) {
    state.filtered = [];
  },
  collapse(state) {
    state.collapsed = !state.collapsed;
  }
};
