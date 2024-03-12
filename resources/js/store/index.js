import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '../store/auth'
import lang from '../store/lang'
import proposal from './proposal'
import good from './goods'
import users from './users'
// import oldIndex from '../store/oldindex'

const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        lang,
        proposal,
        good,
        users
    }
})

export default store
