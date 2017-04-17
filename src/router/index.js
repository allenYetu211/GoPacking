import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import _index from 'viewIndex/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: '_index',
      component: _index
    }
  ]
})
