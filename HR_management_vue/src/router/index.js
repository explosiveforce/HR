import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";

import EmployeeStationTransferManage from "./employeeStationTransferManage";
import EmployeeDismissionManage from "./employeeDismissionManage"
import EmpManage from "./empManage"
import DepartmentManage from "./departmentManage"
import SationManage from "./stationManage";
import EmpProbationManage from "./empProbationManage";
import EmpDepartmentTranferManage from "./empDepartmentTranferManage";
import reportFormManage from "./reportFormManage";







Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Dashboard",
    redirect: "/home",
    meta: {
      title: "西瓜"
    },
    children: [
      {
        path: "home",
        name: "DashboardHome",
        meta: {
          title: "首页中心"
        },
        component: resolve => require(["@/views/home/Index.vue"], resolve)
      }
    ]
  },
  
  {
    path: "/hello",
    name: "hello",
    meta: {
      title: "欢迎页面",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/login/hello.vue"], resolve)
    }
  }, 
  
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "后台登录",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/login/Login.vue"], resolve)
    }
  }, 
  {
    path: "/register",
    name: "register",
    meta: {
      title: "后台注册",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/login/register.vue"], resolve)
    }
  }, 

  //菜单栏路由
  EmployeeStationTransferManage,
  EmployeeDismissionManage,
  DepartmentManage,
  EmpManage,
  SationManage,
  
  EmpProbationManage,
  EmpDepartmentTranferManage,
   reportFormManage,
	
	//查询部门下的员工
  {
  	  path:"/queryEmp",
  	  name:"QueryEmp",
  	  meta: {
  	    title: "查询部门下员工",
  	    keepAlive: false
  	  },
  	  components: {
  	    blank: resolve => require(["@/views/departmentManage/list/queryEmpInDepartment.vue"], resolve)
  	  }
  },
  
  {
    path: "/stationemp",
    name: "Stationemp",
    meta: {
      title: "岗位员工信息"
    },
    component: resolve =>
      require(["@/views/stationManage/listsm/selectemp.vue"], resolve)
  }
  
  

  
  
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
