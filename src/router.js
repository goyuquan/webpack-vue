import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './views/dashboard/dashboard';
import Setting from './views/setting/setting';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Dashboard },
    { path: '/setting', component: Setting },
];

const Routers = new VueRouter( {
    routes,
    // mode: 'history', //不显示#
    linkActiveClass: 'active'
} );

export default Routers;
