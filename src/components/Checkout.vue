<template>
    <v-container>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-list three-line>
                    <v-list-tile v-for="product in cart" :key="product.product_id">
                        <v-list-tile-content>
                            <v-list-tile-title>{{product.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>${{product.price / 100}}</v-list-tile-sub-title>
                            <v-list-tile-sub-title>{{product.description}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>

                <v-btn flat color="green" @click="buy">Purchase</v-btn>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
    name: 'Checkout',
    computed: {
        ...mapState([
            'cart'
        ])
    },
    mounted() {
        if(this.cart.length === 0) {
            window.redirect('/');
        }
    },
    methods: {
        buy() {
            const name = 'Vitacup';
            const description = 'Vitacup Products';
            const currency = 'USD';
            const amount = this.cart.reduce((agg, curr) => {
                return agg += curr.price
            }, 0);
            this.$checkout.open({
                name: 'Vitacup',
                currency: 'USD',
                amount,
                token(token) {
                    axios.post('https://cw-vitacup-stripe.herokuapp.com/stripe', { token: token.id, name, amount, description, currency })
                        .then(() => {
                            alert('Payment successful, coffees on the way!');
                        })
                        .catch(() => {
                            alert('Payment not successful, no coffee today :(');
                        });
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
