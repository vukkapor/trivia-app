import Vue from 'vue'
import Vuex from 'vuex'
import {
  TriviaService
} from '../services/TriviaService'

Vue.use(Vuex)

export const TriviaStoreModule = {
  namespaced: true,
  state: {
    trivias: []
  },
  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias;
    }
  },
  actions: {
    fetchTrivias(context) {
      TriviaService.getTrivia().then(response => {
        context.commit('setTrivias', response.data)
      }).catch(e => {
        alert(e)
      })
    }
  },
  getters: {
    getTrivias(state) {
      return state.trivias;
    }
  }
}