export default {
  name: "部门管理",
  permissionsKey: "",
  icon: "el-icon-refrigerator",
  children: {
    courseCardList: {
      name: "部门列表",
      permissionsKey: "",
      path: "/department_Manage/list"
    },
	
	departmentCount: {
	  name: "部门概况统计",
	  permissionsKey: "",
	  path: "/department_Manage/count"
	},
  }
};
