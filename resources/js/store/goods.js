export default {
    namespaced: true,
    state: {
        goods: [],
        good: []
    },
    getters: {
        getGoods(state) {
            return state.goods
        },
        getGood(state) {
            return state.good
        }
    },
    mutations: {
        SET_GOODS(state, value) {
            state.goods = value
        },
        SET_GOOD(state, value) {
            state.good = value
        }
    },
    actions: {
        getGoods({commit}, goods) {
            commit('SET_GOODS', goods)
        },
        getGood({commit}, good) {
            commit('SET_GOOD', good)
        }
    }
}
