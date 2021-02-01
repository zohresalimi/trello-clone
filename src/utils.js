export function uuid() {
  return Math.random()
    .toString(16)
    .slice(2);
}

export function saveStatePlugin(store) {
  const localStorageString = process.env.VUE_APP_LOCAL_STORAGE_STRING;
  store.subscribe((mutation, state) => {
    localStorage.setItem(localStorageString, JSON.stringify(state.board));
  });
}
