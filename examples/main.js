import Vue from 'vue';
import App from './App.vue';
import Vus from '../dist/vus.js';
import '../dist/styles/vus.css';

Vue.use(Vus,{
    icons: require.context('./svg', false, /\.svg$/)
});

// 开启debug模式
Vue.config.debug = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
