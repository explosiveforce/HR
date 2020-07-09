import Vue from "vue";
import App from "./App.vue";
import elementUi from "element-ui";
import Config from "@/config/app";
import "@/assets/css/style.scss";
import router from "./router";
import store from "./store";
import "@/utils/v-auth.js";
import { getToken,toDecimal2,getUserInfo } from "@/utils/common";
import AsyncRouterMap from "./router/asyncRouterMap";
import "./components";
import echarts from 'echarts'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts
Vue.prototype.GlobalCfg = Config;
Vue.use(elementUi);
Vue.filter('toDecimal',function(value){
	 return toDecimal2(value);//全局过滤器保留两位小数
	});


router.beforeEach((to, from, next) => { 
  window.document.title = to.meta.title
    ? to.meta.title + "-" + Config.siteName
    : Config.siteName;
  const token = getToken()
  if (token) {
    if(router.options.routes.length>3){
      next()
    }else{
      const asyncRouter = AsyncRouterMap.filter(function(k) {
        if (k.meta && k.meta.role && k.meta.role.indexOf(getUserInfo().role) >= 0) {
          return true;
        }
      });
      router.options.routes.unshift(...asyncRouter);
      router.addRoutes(asyncRouter);
      router.addRoutes([
        {
          path: "/404",
          component: () => import("@/views/error-page/404.vue")
        },
        {
          path: "*",
          redirect: "/404"
        }
      ]);  
      
      next({...to,replace:true})
    }
  } else {
    // 如果没有登录，访问非登录页面,则跳转到登录页面
    if (to.path !== '/hello') {
      if(to.path==='/' ||to.path==="/register"||to.path==="/login"){
        next()
      }else{
        next({path: '/hello'})
      }
    } else {
      // 如果没有登录，但访问的是登录页面,直接进入
      next()
    }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");