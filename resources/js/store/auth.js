import axios from 'axios';

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {},
        role: '',
    },
    getters: {
        authenticated(state) {
            return state.authenticated
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },
        SET_USER(state, value) {
            state.user = value
        },
        CHECK_ADMIN(state, value) {
            console.log('check admin', value)
            state.role = value
        },
    },
    actions: {
        login({commit}) {
            return axios.get('/api/user').then(({data}) => {
                commit('SET_USER', data)
                commit('SET_AUTHENTICATED', true)
            }).catch(({res}) => {
                commit('SET_USER', {})
                commit('SET_AUTHENTICATED', false)
            })
        },
        getUser({commit}) {
            return axios.get('/api/user').then(({data}) => {
                if (data.success) {
                    console.log('getUser success ', data.data)
                    commit('SET_USER', data.data)
                    commit('SET_AUTHENTICATED', true)
                    const inputString = data.data.email;
                    console.log('data.data.email', data.data.email)
                    const isAdmin = inputString.toLowerCase().includes("admin");
                    if (isAdmin) {
                        commit('CHECK_ADMIN', 'admin')
                    } else {
                        commit('CHECK_ADMIN', 'user')
                    }
                    // router.push({name: 'dashboard'})
                }
                // else {
                //     commit('SET_USER', {})
                //     commit('SET_AUTHENTICATED', false)
                // }
            }).catch(({res}) => {
                console.log('getUser catch ', data)
                commit('SET_USER', {})
                commit('SET_AUTHENTICATED', false)
            })
        },
        logout({commit}) {
            console.log('logout')
            commit('SET_USER', {})
            commit('SET_AUTHENTICATED', false)
            commit('CHECK_ADMIN', {})
            localStorage.removeItem('token')
        }
    }
}
