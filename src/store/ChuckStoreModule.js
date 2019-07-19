import Vue from 'vue'
import Vuex from 'vuex'
import {
  ChuckService
} from '../services/ChuckService'

Vue.use(Vuex)

export const ChuckStoreModule = {
  namespaced: true,
  state: {
    randomJoke: 'nesto'
  },
  mutations: {
    setJoke(state, joke) {
      state.randomJoke = joke
    }
  },
  actions: {
    fetchJoke(context) {
      ChuckService.getJoke()
        .then(response => {
          context.commit('setJoke', response.value)
        }).catch(e => {
          alert(e)
        })
    }
  },
  getters: {
    getJoke(state) {
      return state.randomJoke;
    }
  }
}