import Vue from 'vue'
import Vuex from 'vuex'
import {
  TriviaService
} from '../services/TriviaService'

Vue.use(Vuex)

export const TriviaStoreModule = {
  namespaced: true,
  state: {
    trivias: [],
    triviaCategories: []
  },
  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias;
    },
    setTriviaCategories(state, triviaCategories) {
      state.triviaCategories = triviaCategories;
    }
  },
  actions: {
    fetchTrivias(context) {
      TriviaService.getTrivia().then(response => {
        context.commit('setTrivias', response.data)
      }).catch(e => {
        alert(e)
      })
    },

    fetchTriviaCategories(context) {
      TriviaService.getTriviaCategories().then(response => {
        context.commit('setTriviaCategories', response.data)
      }).catch(e => {
        alert(e)
      })
    },

    fetchTriviaByCategory(context, id) {
      TriviaService.getTriviaByCategory(id).then(response => {
        context.commit('setTrivias', response.data.clues)
      }).catch(e => {
        alert(e)
      })
    }
  },
  getters: {
    getTrivias(state) {
      return state.trivias;
    },
    getTriviaCategories(state) {
      return state.triviaCategories;
    }
  }
}