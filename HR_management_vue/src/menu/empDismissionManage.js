export default{
	name:"离职管理",
	permissionsKey: "",
	icon: "fa fa-shopping-bag",
	children:{
		dismissionManage:{
			name:"离职管理",
			permissionsKey: "",
			//显示所有员工信息进行离职或是按某个类型（部门，岗位）筛选人员后进行离职
			path:"/demission_manage/demissionrManage"
		},
		
		queryHsaDismissionEmployee:{
			name:"查询已离职员工信息",
			permissionsKey: "",
			
			path:"/demission_manage/hasDismissionEmpInfo"
		},
		
		
	}
}