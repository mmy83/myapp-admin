import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {                                     //二级路由
          path:'/home/about',
          name:'home.about',
          component:() => import("./views/About.vue"),
        },
        {
          path:'/home/welcome',
          name:'home.welcome',
          component:() => import("./views/Welcome.vue"),
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import('./views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '' || token === null) {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
