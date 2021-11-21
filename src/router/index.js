import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path: '/',redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  // 如果是访问login页面，直接放行
  // 如果不是访问login页面，则必须要先获取到token才可以放行
  if(to.path == "/login") {
    next()
  } else {
    // 获取token
    const token = window.sessionStorage.getItem('token')
    // 如果token不对，则要强制跳转到登录页
    if(!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
