import Vue from 'vue';
import App from './App.vue';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

new Vue({
    el: '#app',
    render: h => h(App)
})
