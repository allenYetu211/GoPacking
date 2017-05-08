import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import _index from 'viewIndex/index'
import _goodsItems from 'viewGo/Introduction'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: 'goodsItems',
      name: 'goodsItems',
      component: _goodsItems
    }
  ]
})
