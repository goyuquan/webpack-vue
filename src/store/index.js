import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    cart,
    products
  },
  strict: debug,
})
