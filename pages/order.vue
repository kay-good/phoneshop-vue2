<template>
    <section class="section">
        <div class="columns is-mobile">
            <div v-if="orderDone">
                <div class="title">сбасибо за заказ</div>
                <NuxtLink to="/" class="button is-primary">На главную</NuxtLink>
            </div>
            <div v-else>
                <form @submit="onSubmit">
                    <div class="title">Введите:</div>
                    <div class="field"><input type="text" v-model="fullName" placeholder="ваш ФИО" class="input" required></div>
                    <div class="field"><input type="phone" v-model="phoneNumber" placeholder="ваш номер телефона" class="input" required></div>
                    <div class="field"><input type="submit" value="Submit" class="button"></div>
                </form>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: 'Order',
    data() {
        return {
            orderDone: false,
            fullName: "",
            phoneNumber: ""
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            this.orderDone = true
        }
    },
}
</script>
  