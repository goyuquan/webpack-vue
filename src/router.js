import Vue from 'vue';
import VueRouter from 'vue-router';
import appWrap from './views/appWrap';
import dashboard from './views/dashboard';
import pageNotFound from './views/pageNotFound';
import login from './views/auth/login';
import Setting from './views/setting/setting';
import nestWrap from './views/nest//nestWrap';
import nest from './views/nest/nest/nest';
import nestDetail from './views/nest/nestDetail/nestDetail';
import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    name: '首页',
    path: '/',
    component: appWrap,
    children: [
      { name: '登录', path: 'login', component: login, meta: { escapeAuth: true } },
      { name: '设置', path: 'setting', component: Setting },
      {
        name: '嵌套组件',
        path: 'nest',
        component: nestWrap,
        children: [
          { name: '嵌套详情', path: 'detail', component: nestDetail },
          { path: '', component: nest }
        ]
      },
      { name: '仪表盘', path: 'dashboard', component: dashboard },
      { path: '', redirect: 'dashboard' },
      { name: '找不到页面', path: '*', component: pageNotFound }
    ]
  },
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
