


import departmentManage from "./departmentManage.js";//部门管理
import stationManage from "./stationManage.js";//岗位管理

import employeeProbationManage from "./empProbationManage.js";//员工试用期管理
import employeeDepartmentTranferManage from "./empDepartmentTranferManage.js";//员工部门调动管理

import employeeStationTransferManage from "./empStationTransferManage.js";//员工岗位调动管理
import employeeDismissionManage from "./empDismissionManage.js";//员工离职管理
import employeeInfoManage from "./empInfoManage.js";//员工信息管理
import reportFormManage from "./reportFormManage.js";//报表管理




/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
let home = {
  name: "首页",
  path: "/",
  permissionsKey: "",
  // Fontawesome中文版webfont,是一款基于css框架的网页字体图标库,你可以用 <i> 标签把 Font Awesome 图标放在任意位置。
  icon: "fa fa-tachometer"
};

export default {
  home,//主页面
  
  departmentManage,//部门管理
  stationManage,//岗位管理
  employeeDismissionManage,//员工离职管理
  employeeProbationManage,//员工试用期管理
  employeeDepartmentTranferManage,//员工部门调动管理
  
  employeeStationTransferManage,//员工岗位调动管理
  
  employeeInfoManage,//员工信息管理
  reportFormManage,//报表管理
  
};
