<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center>
        <v-container grid-list-xl fluid>
          <v-layout row wrap>
            <v-flex v-for="product in products" :key="product.product_id" xs12 sm6 md4 lg3>
              <v-card flat tile>
                <v-img
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 30) + 1}`"
                  height="150px"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{product.name}}</h3>
                    <div>{{product.description}}</div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat color="orange" @click="addToCart(product)">Add to Cart</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ProductList',
  methods: {
    ...mapMutations([
      'addToCart',
      'removeFromCart'
    ])
  },
  computed: {
    ...mapState([
      'products',
      'cart'
    ])
  }
}
</script>

<style scoped>

</style>
