import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
