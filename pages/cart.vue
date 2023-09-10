<template>
  <section class="section">
    <div class="columns is-mobile">
      <div v-if="isCartFull">
        <div v-for="(item, index) in cartItems" :key="index" class="card">
          <div :to="{ name: 'id', params: { id: item.id } }" class="card-image">
            <figure class="image is-128x128">
              <img src="item.image" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div>{{ item.name }}</div>
            <div class="">{{ `${item.price}$` }} x {{ `${item.quantity} шт.` }}</div>
          </div>
          <footer class="card-footer">
            <input type="number" v-model="item.quantity" placeholder="item.quantity" class="card-footer-item input">
            <button @click="deleteFromCart(item.id)" class="card-footer-item button">удалить</button>
          </footer>
        </div>

      </div>
      <div v-else class="title">404</div>
    </div>
    <div v-if="isCartFull" class="columns is-mobile is-flex is-align-items-center m-3">
      <div class="is-size-4 mr-3">{{ `всего ${cartSum}$` }}</div>
      <NuxtLink to="/order" class="button is-primary">К заказу</NuxtLink>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Cart',
  data() {
    return {
      isCartFull: false,
      cartItems: [],
      cartSum: 0
    }
  },
  methods: {
    ...mapActions(['deletePhoneFromCart']),
    deleteFromCart(id) {
      this.deletePhoneFromCart(id)
      this.cartItems = this.$store.state.phonesCart
      this.cartSum = this.cartItems.reduce((acc, it) => {
        return acc + (it.quantity * it.price)
      }, 0)
    }
  },
  mounted() {
    if (this.$store.state.phonesCart.length > 0) {
      this.isCartFull = true
      this.cartItems = this.$store.state.phonesCart
      this.cartSum = this.cartItems.reduce((acc, it) => {
        return acc + (it.quantity * it.price)
      }, 0)
    }
  }
}
</script>
