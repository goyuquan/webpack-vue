import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './views/dashboard';
import pageNotFound from './views/pageNotFound';
import login from './views/auth/login';
import Setting from './views/setting/setting';
import nestIndex from './views/nest//nestIndex';
import nest from './views/nest/nest/nest';
import nestDetail from './views/nest/nestDetail/nestDetail';
import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: login, meta: { escapeAuth: true } },
  { path: '/setting', component: Setting },
  {
    path: '/nest',
    component: nestIndex,
    children: [
      { path: 'detail', component: nestDetail },
      { path: '', component: nest }
    ]
  },
  { path: '', component: Dashboard },
  { path: '*', component: pageNotFound }
];

const router = new VueRouter({
  routes,
  // mode: 'history', //不显示#
  linkActiveClass: 'active'
});

const loggedIn = true
// const loggedIn = store.getters.isAuthenticated //TODO

router.beforeEach((to, from, next) => {
  console.log('______________beforeEach', to);
  if (!to.matched.some(record => record.meta.escapeAuth)) {
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
