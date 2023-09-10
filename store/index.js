export const state = () => ({
    phones: [],
    phonesCart: []
})

export const getters = {
    getPhones(state) {
        return state.phones
    },
}

export const mutations = {
    fetchPhones(state, data) {
        state.phones = data;
    },
    addPhoneToCart(state, data) {
        state.phonesCart.push(data)
    },
    deletePhone(state, data) {
        const filteredCard = state.phonesCart.filter(it => it.id !== data)
        state.phonesCart = filteredCard
    }
}

export const actions = {
    fetchPhones({ commit }, data) {
        commit('fetchPhones', data)
    },

    addPhoneToCart({ commit }, data) {
        commit('addPhoneToCart', data)
    },
    deletePhoneFromCart({ commit }, data) {
        commit('deletePhone', data)
    }
}