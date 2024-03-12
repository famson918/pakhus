export default {
    namespaced: true,
    state: {
        proposals: []
    },
    getters: {
        getProposals(state) {
            return state.proposals
        },
    },
    mutations: {
        SET_PROPOSALS(state, value) {
            state.proposals = value
        }
    },
    actions: {
        getProposals({commit}, proposals) {
            commit('SET_PROPOSALS', proposals)
        }
    }
}
