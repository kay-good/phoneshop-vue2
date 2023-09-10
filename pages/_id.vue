<template>
    <section class="section">
        <div class="columns is-mobile">
            <div v-if="pageExist" class="column is-three-quarters">
                <div class="title">{{ pageObject.name }}</div>
                <figure class="image is-4by3 has-background-light">
                    <img src="pageObject.image" alt="Placeholder image">
                </figure>
                <div class="is-size-6">{{ pageObject.description }}</div>
                <div class="is-size-5">{{ `${pageObject.price}$` }}</div>
            </div>
            <div v-else class="title">404</div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'ItemPage',
    data() {
        return {
            pageExist: "",
            pageObject: ""
        }
    },
    methods: {

    },
    mounted() {
        const phoneObject = this.$store.state.phones.find(it => it.id === this.$route.params.id)
        if (typeof phoneObject !== "undefined") {
            this.pageExist = true
            this.pageObject = phoneObject
        }
        console.log(phoneObject)
    }
}
</script>
  