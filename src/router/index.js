import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import dashboard from '../views/dashboard.vue'
import Message from '../components/Display/Messages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: SignIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: [
      {    path: '/',
          name: 'Message',
          component: Message,
      },
    ],
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
//   if (requiresAuth && !auth.currentUser) {
//     next("login");
//   } else {
//     next();
//   }
// });

export default router
