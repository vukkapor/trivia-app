import Vue from 'vue'
import Vuex from 'vuex'

import {
  ChuckStoreModule
} from './ChuckStoreModule'
import {
  TriviaStoreModule
} from './TriviaStoreModule'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    ChuckStoreModule,
    TriviaStoreModule
  }
})

export default store