import '@babel/polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueStripeCheckout from 'vue-stripe-checkout';
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import routes from './routes'

Vue.config.productionTip = true
Vue.use(VueRouter)
Vue.use(VueStripeCheckout, {
  key: 'pk_test_o3k5pElcOXDvqEjxWbcwgKeS',
  image: 'https://images-na.ssl-images-amazon.com/images/I/71QxrPyihDL._SL1080_.jpg',
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: "Buy {{amount}} of Vitacup goodness!"
});

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
