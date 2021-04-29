import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
     state: {
        todos: [
            { id: 1, name: 'mai hai', address: '166/16 dvb'},
            { id: 2, name: 'bguyen tuan', address: 'Ho chi minh'},
            { id: 3, name: 'mong tham', address: 'Di an'}
        ]
    }
})
 