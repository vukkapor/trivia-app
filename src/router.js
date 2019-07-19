import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './components/TriviaApp'
import Chuck from './components/Chuck'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'TriviaApp',
      component: TriviaApp
    },
    {
      path: '/chuck',
      name: 'Chuck',
      component: Chuck
    }
  ]
})