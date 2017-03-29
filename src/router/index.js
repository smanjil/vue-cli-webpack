import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Options from '@/components/Options'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/options',
      name: 'Options',
      component: Options
    }
  ]
})
