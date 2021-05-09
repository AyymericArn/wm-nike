// eslint-disable-next-line
import Product from '@/models/Product';
import { createStore } from 'vuex';
import { getProducts } from '@/api/products';

interface State {
  products: Product[]
}

export default createStore<State>({
  state: {
    products: [],
  },
  mutations: {
    async getProducts(state) {
      state.products = await getProducts();
    },
  },
  actions: {
    getProducts(context) {
      context.commit('getProducts');
    },
  },
  modules: {
  },
});
