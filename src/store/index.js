import Vue from 'vue'
import Vuex from 'vuex'

import gMutation from './mutations'
import gActions from './actions'

import moduleA from './modules/moduleA'
import moduleLogin from './modules/moduleLogin'

Vue.use(Vuex)

const storeInit =  {
  state: {
    count: 0
  },
  mutations: gMutation,
  actions: gActions,
  modules: {
    moduleA,
    moduleLogin
  }
}
const store = new Vuex.Store(storeInit)

export default store