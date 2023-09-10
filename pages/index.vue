<template>
  <section class="section">
    <div class="is-flex is-flex-direction-row is-flex-wrap-wrap">
      <div v-for="(item, index) in items" :key="index" class="card column is-one-third is-flex is-flex-direction-column is-justify-content-space-around">
        <NuxtLink :to="{ name: 'id', params: { id: item.id } }" class="card-image">
          <figure class="image is-128x128">
            <img src="item.image" alt="Placeholder image">
          </figure>
        </NuxtLink>
        <div class="card-content">
          <NuxtLink :to="{ name: 'id', params: { id: item.id } }">{{ item.name }}</NuxtLink>
          <div class="">{{ `${item.price}$` }}</div>
        </div>
        <footer class="card-footer">
          <input type="number" v-model="item.quantity" placeholder="item.quantity" class="card-footer-item input">
          <button @click="addToCart(item.id)" class="card-footer-item button">Add</button>
        </footer>

      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import { mapActions } from "vuex";

export default {
  name: 'IndexPage',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    ...mapActions(['fetchPhones', 'addPhoneToCart']),
    addToCart(id) {
      const index = this.items.findIndex(it => it.id === id)
      //console.log(index)
      this.addPhoneToCart(this.items[index])
    }
  },
  mounted() {
    this.items = (this.json).map(it => { return { ...it, "quantity": 1 } }).sort((a, b) => a.price - b.price)
    this.fetchPhones(this.json)

  },
  async asyncData({ $content }) {
    const json = await $content('json').fetch()
    return { json }
  }
}
</script>
