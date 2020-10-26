import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Login from './components/Login'
import Udash from './components/Udash'
import ProjectPage from './components/ProjectPage'
import CasePage from './components/CasePage'
import IssuePage from './components/IssuePage'
import axios from 'axios'
import VueAxios from 'vue-axios'



//bootstrap import
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter);

const routes=[

  {path:'/',component:Home},
  {path:'/login',component:Login},
  {path:'/userdash',component:Udash},
  {path:'/propage/:id',component:ProjectPage},
  {path:'/case/:id',component:CasePage},
  {path:'/issue',component:IssuePage}


];

const router = new VueRouter({
  routes,
  mode:'history'
});





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
