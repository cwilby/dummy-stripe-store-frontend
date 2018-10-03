<template>
  <v-app>
    <v-toolbar app :clipped-left="clipped">
      <router-link to="/">
        <v-btn icon @click.stop="fixed = !fixed">
          <v-icon>fa-shopping-cart</v-icon>
        </v-btn>
      </router-link>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <router-link to="/checkout">
        <v-btn align-end flat color="orange">Cart ({{cart.length}})</v-btn>
      </router-link>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'App',
  data () {
    return {
      title: 'Vitacup Dummy Store',
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'fa-bullseye',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  computed: {
    ...mapState([
      'cart'
    ])
  },
  methods: {
    ...mapMutations([
      'clearCart',
      'removeFromCart'

    ])
  }
}
</script>
