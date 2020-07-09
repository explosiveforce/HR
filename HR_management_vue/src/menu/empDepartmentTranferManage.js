export default{
	name:"部门调动管理",
	permissionsKey: "",
	icon: "fa fa-shopping-bag",
	children:{
		stationTransfer:{
			name:"部门调动",
			permissionsKey: "",
			path:"/empDepartmentTranfer_Manage/list"
		},
		
		queryStationTransferOfEmployee:{
			name:"查询已调动部门员工信息",
			permissionsKey: "",
			path:"/empDepartmentTranfer_Manage/select"
		},
		
		
	}
}