import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const have = (product) => p => p.product_id === product.product_id;

export default new Vuex.Store({
  state: {
    products: [{
      product_id: 1,
      name: 'Vitacup Coffee #1',
      description: 'Minim proident labore est dolor ad labore reprehenderit.',
      price: 2999
    },{
      product_id: 2,
      name: 'Vitacup Coffee #2',
      description: 'Incididunt mollit proident do ipsum officia nisi amet sit fugiat anim tempor ex laboris aliquip.',
      price: 2999
    },{
      product_id: 3,
      name: 'Vitacup Coffee #3',
      description: 'Aliquip non in enim qui labore in ex in reprehenderit.',
      price: 2999
    },{
      product_id: 4,
      name: 'Vitacup Coffee #4',
      description: 'Aliquip non in enim qui labore in ex in reprehenderit.',
      price: 2999
    }],
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product)
    },
    removeFromCart(state, product) {
      const index = state.products.findIndex(have(product))
      state.cart.splice(index, 1)
    },
    clearCart(state) {
      state.cart = []
    }
  }
})
