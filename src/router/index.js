import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '../components/Test'
import Box from '../components/Box'

Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    }
  ]
})
