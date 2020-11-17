import Vue from 'vue'
import App from '../App'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Piggy from '@/components/Piggy'
import Layout from '@/components/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [ 
      {
        path: '',
        name: 'home',
        component: Piggy //เปลี่ยนตรงนี้เป็น Piggy หรือ Home
        

      }
    ]
    }
  ]
  const router = new VueRouter({
    routes
  })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
