const store = Redux.createStore();

if (window.Cypress) {
  window.store = store;
}
