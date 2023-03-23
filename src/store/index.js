import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [],
    };
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },

  mutations: {
    addToCart(state, payload) {
      state.products.push(payload);
    },
    updateCart(state, payload) {
      var product = state.products.find((product) => product.id == payload.id);
      product.qty = payload.qty;
      product.total = payload.qty * product.price;
    },
    removeCartProduct(state, payload) {
      var index = state.products.findIndex((product) => product.id == payload.id);
      state.products.splice(index,1);
     
    },
  },
});
