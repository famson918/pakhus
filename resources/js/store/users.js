export default {
    namespaced: true,
    state: {
        users: [],
    },
    mutations: {
        SET_USERS(state, value) {
            state.users = value
        },
    },
    actions: {
        getUsers({commit}, users) {
            commit('SET_USERS', users)
        },
    }
}
