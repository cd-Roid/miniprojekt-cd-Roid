export default {

  group(state, data) {
    state.chunks = [];
    const arr = [];
    for (let index = 1520; index <= 1620; index++) {
      let element = data.filter(items => items.dating.begin == index);
      arr[index] = { element };
    }
    const filtered = arr.filter(items => items.element != 0);
    console.log(filtered[0])
    state.chunks = filtered;
  }
};
